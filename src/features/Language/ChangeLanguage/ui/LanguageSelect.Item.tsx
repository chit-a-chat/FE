import { CountryFlag, TCountryName } from "@shared/ui";

export const Item = ({ country }: { country: TCountryName }) => {
    return (
        <div
            style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
                padding: "8px 10px",
            }}
        >
            <CountryFlag country={country} width="30px" height="30px" isSquare={false} />
            <span>{country}</span>
        </div>
    );
};
