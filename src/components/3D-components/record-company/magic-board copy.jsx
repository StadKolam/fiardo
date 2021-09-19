import React, { useEffect, useRef, useState, useCallback } from "react";
import Tone from "tone";
import BeatCube from "./beat-cube";
import useRecordPlayerStore from "../../../zustand/record-page-store";

const drums = new Tone.Sampler({
    c0: "kick.wav",
    d0: "clap.wav",
    e0: "hat.wav"
}).toMaster();

const synth = new Tone.PolySynth().toMaster();

const trackIndex = ["c0", "d0", "e0"];
const tracks = ["Kick", "Clap", "Hat", "Synth"];
Tone.Transport.bpm.value = 100;

const generateSteps = () => {
    let steps = [];
    for (let i = 0; i < 16; i++) {
        steps.push(0);
    }
    return steps;
};

const initialSteps = tracks.map((t) => ({
    name: t,
    steps: generateSteps()
}));

export default function MagicBoard() {

    let [tracks, setTracks] = useState(initialSteps);
    const { playing } = useRecordPlayerStore();

    let stepIndex = useRef(0);

    useEffect(() => {
        if (playing) {
            Tone.Transport.start();
        } else {
            Tone.Transport.stop();
        }
    }, [playing]);

    useEffect(() => {
        Tone.Transport.cancel();
        Tone.Transport.scheduleRepeat(function (time) {
            tracks.forEach((track, index) => {
                let step = track.steps[stepIndex.current];
                if (step === 1) {
                    if (index === 3) {
                        let chord =
                            stepIndex.current < 7 ? ["c4", "d#4", "g4"] : ["a#3", "d4", "g4"];
                        synth.triggerAttackRelease(chord, 0.5);
                    } else {
                        drums.triggerAttack(trackIndex[index]);
                    }
                }
            });

            stepIndex.current = stepIndex.current > 14 ? 0 : stepIndex.current + 1;
        }, "16n");
    }, [tracks]);

    const updateStep = useCallback(
        function (trackIndex, stepIndex) {
            let newTracks = [...tracks];

            newTracks[trackIndex].steps[stepIndex] =
                newTracks[trackIndex].steps[stepIndex] === 0 ? 1 : 0;
            setTracks(newTracks);
        },
        [tracks, setTracks]
    );

    return (
        <>
            {tracks.map((track, index) => {
                return (<React.Fragment key={index}>
                    {track.steps.map((s, stepIndex) => {
                        return (
                            <BeatCube key={`step-${index}-${stepIndex}`} index={index} stepIndex={stepIndex} updateStep={updateStep}
                                position={[0.95, 5 - index, 3.75 - stepIndex / 2]}
                            />
                        );
                    })}
                </React.Fragment>
                );
            })}

        </>
    );
}
