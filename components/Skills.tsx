import { skills } from "@/utils/skills";

const Skills = () => {
    return (
        <div className='space-y-4 mb-4 rounded-lg   w-full -mt-2 py-4 px-4  '>
            <p className="text-neutral-400  dark:text-neutral-300 leading-relaxed text-sm font-medium text-xl">
               Tech-Tools  
            </p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 13).map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="relative group cursor-pointer border border-neutral-300 p-2 rounded-md
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                bg-linear-to-t from-[#e8e8e8] to-[#f2f2f2]
                dark:bg-linear-to-t dark:from-[#252525] dark:to-[#545454]
                dark:border-neutral-700 text-neutral-600 dark:text-neutral-300
                hover:-translate-y-0.5 translate-y-0 duration-100 delay-75 transition-all ease-in-out
                flex items-center justify-center
                hover:text-[var(--hover-color)] hover:border-[var(--hover-color)]
                dark:hover:text-[var(--hover-color-dark)] dark:hover:border-[var(--hover-color-dark)]"
                                style={{
                                    // @ts-ignore
                                    "--hover-color": skill.color,
                                    // @ts-ignore
                                    "--hover-color-dark": skill.colorDark || skill.color
                                }}
                            >
                                <Icon
                                    className="h-5 w-5 transition-colors duration-200"
                                    style={{ color: "inherit" }}
                                />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 dark:bg-neutral-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.slice(13).map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="relative group cursor-pointer border border-neutral-300 p-2 rounded-md
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                bg-linear-to-t from-[#e8e8e8] to-[#f2f2f2]
                dark:bg-linear-to-t dark:from-[#252525] dark:to-[#545454]
                dark:border-neutral-700 text-neutral-600 dark:text-neutral-300
                hover:-translate-y-0.5 translate-y-0 duration-100 delay-75 transition-all ease-in-out
                flex items-center justify-center
                hover:text-[var(--hover-color)] hover:border-[var(--hover-color)]
                dark:hover:text-[var(--hover-color-dark)] dark:hover:border-[var(--hover-color-dark)]"
                                style={{
                                    // @ts-ignore
                                    "--hover-color": skill.color,
                                    // @ts-ignore
                                    "--hover-color-dark": skill.colorDark || skill.color
                                }}
                            >
                                <Icon
                                    className="h-5 w-5 transition-colors duration-200"
                                    style={{ color: "inherit" }}
                                />
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-neutral-800 dark:bg-neutral-700 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
