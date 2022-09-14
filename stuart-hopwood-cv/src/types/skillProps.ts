export type SkillExampleProps = {
    text: string;
};

export type SkillProps = {
    id: number;
    skillName: string;
    percentage: number;
    skillExamples?: SkillExampleProps[];
};