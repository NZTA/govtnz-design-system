/// <reference types="react" />
declare type Props = {
    href: string;
    rel?: string | undefined;
    target?: "Blank" | "Top" | "Self" | "Parent" | undefined;
    href2: string;
    rel2?: string | undefined;
    target2?: "Blank" | "Top" | "Self" | "Parent" | undefined;
};
declare const Breadcrumbs: ({ href, rel, target, href2, rel2, target2 }: Props) => JSX.Element;
export default Breadcrumbs;
