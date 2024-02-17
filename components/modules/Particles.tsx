'use client'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import {useIsDarkMode} from "@/lib/helpers";

const ParticlesModule = () => {
    const darkMode = useIsDarkMode()
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const particlesLoaded = async (container?: Container): Promise<void> => {
    //     console.log(container);
    // };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: darkMode ? "#333333" : "#FFFFFF",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: darkMode ? "#ffffff" : "#121212",
                },
                links: {
                    color: darkMode ? "#ffffff" : "#121212",
                    distance: 200,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 100,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [darkMode],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                // particlesLoaded={particlesLoaded}
                options={options}
                className="absolute inset-0 z-[-1]"
            />
        );
    }

    return <></>;
};

export default ParticlesModule;