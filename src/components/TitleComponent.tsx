import { Navigation } from "@mui/icons-material";

interface Props {
    title: string;
    preTitle?: string;
    classNameForArrow?: string;
}

const Title: React.FC<Props> = ({ preTitle, title, classNameForArrow }) => {
    classNameForArrow = classNameForArrow || "bg-white";
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col px-2 pb-[40px] w-auto">
                <h3 className="text-lg font-serif text-secondary inline-block uppercase text-left ">
                    {preTitle}
                </h3>
                <h3 className="text-5xl font-serif text-primary relative border-b border-secondary inline-block w-max pb-4">
                    {title}
                    <Navigation className={"text-primary nav-icon-title " + classNameForArrow} />
                </h3>
            </div>
        </div>
    );
}

export default Title;