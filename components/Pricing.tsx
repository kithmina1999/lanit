
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboard,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";


const Pricing = () => {
    return (
        <div className="bg-aboutus  py-32">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white dark:text-white font-sans mb-16">
                Pricings for Subscriptions
            </h2>
            <BentoGridDemo />
        </div>
    )
}

export default Pricing



export function BentoGridDemo() {
    return (
        <BentoGrid className="max-w-6xl mx-auto gap-8">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    header={item.header}
                    description={item.description}
                    className={i === 3 || i === 6 ? "md:col-span-2" : "row-span-2"}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = ({ header, index }: { header: string, index: number }) => (
    <div>
        <div>
            <p className="text-center font-bold text-xl">{header}</p>
        </div>
        <div className="p-2 mt-6 ms-4">
            <ul className="list-disc">
                {pricing_Items[index].listItems.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                ))}

            </ul>
        </div>
    </div>
);
export const ButtonsCard = ({
    children,
    className,
    href,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    href?:string;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "h-10 w-full bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
                className
            )}
        >
            <a href={href} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-xl text-white font-light transition duration-200 ease-linear">
               <p className="text-xl font-semibold">{children}</p>
            </a>
        </div>
    );
};
const items = [
    {
        header: <Skeleton header="Starter" index={0} />,
        description: <ButtonsCard href="">Subscribe now</ButtonsCard>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        header: <Skeleton header="Intermediate" index={1} />,
        description: <ButtonsCard>Subscribe now</ButtonsCard>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        header: <Skeleton header="Premium" index={2} />,
        description: <ButtonsCard>Subscribe now</ButtonsCard>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },


];

const pricing_Items = [
    {
        "name": "starter",
        listItems: [
            "Access to course materials (videos, PDFs)",
            "Access to a set of model papers",
            "Limited-time access (e.g., 6 months)",
            "Basic support (email)",
        ]
    },
    {
        "name": "starter",
        listItems: [
            "Access to course materials (videos, PDFs)",
            "Access to a set of model papers",
            "Limited-time access (e.g., 6 months)",
            "Basic support (email)",
        ]
    },
    {
        "name": "starter",
        listItems: [
            "Access to course materials (videos, PDFs)",
            "Access to a set of model papers",
            "Limited-time access (e.g., 6 months)",
            "Basic support (email)",
            "Basic support (email)",
            "Basic support (email)",
        ]
    }

]


{/* <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
  Next.js Blue
</button> */}
