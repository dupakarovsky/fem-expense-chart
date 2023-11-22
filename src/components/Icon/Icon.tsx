interface IconProps {
    id: string;
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    fillColor?: string;
    stroke?: string | undefined;
}

export function Icon({
    id,
    width = 32,
    height = 32,
    viewBox = "0 0 32 32",
    fillColor = "black",
    stroke = "red",
}: IconProps): React.ReactNode {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fillColor}
            stroke={stroke}
        >
            <use href={`symbols-def.svg#${id}`}></use>
        </svg>
    );
}
