export type SkillExampleProps = {
    id?: string
    text: string;
};

export type SkillProps = {
    id?: string
    skillName: string;
    percentage: number;
    skillExamples?: SkillExampleProps[];
};