import React, { useEffect, useRef, useState, useCallback } from "react";
import Tone from "tone";
import useRecordPlayerStore from "../../zustand/record-page-store";
import './magic-board.scss';
import Window from "../window/window.component";
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
    const { playing, setPlaying } = useRecordPlayerStore();
    const [currentColumn, setCurrentColumn] = useState();

    let stepIndex = useRef(0);

    useEffect(() => {
        if (playing) {
            Tone.Transport.start();
        } else {
            Tone.Transport.stop();
        }
    }, [playing]);

    useEffect(() => {
        return () => {
            Tone.Transport.stop()
            setPlaying(false)
            console.log(initialSteps)

        }
    }, [setPlaying])

    useEffect(() => {
        Tone.Transport.cancel();
        Tone.Transport.scheduleRepeat(function (time) {
            tracks.forEach((track, index) => {
                let step = track.steps[stepIndex.current];
                // setCurrentColumn(step);
                setCurrentColumn(stepIndex.current)

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
            console.log(tracks)
        },
        [tracks, setTracks]
    );

    return (
        <React.Fragment>

            {tracks.map((track, index) => {
                return (
                    <div
                        key={`track-${index}`}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        {track.steps.map((s, stepIndex) => {
                            return (
                                <Window key={`step-${index}-${stepIndex}`} currentColumn={currentColumn} index={index} stepIndex={stepIndex} updateStep={updateStep} />
                            );
                        })}
                    </div>
                );
            })}

        </React.Fragment>
    );
}
