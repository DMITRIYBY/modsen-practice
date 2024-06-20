import React, {useState} from "react";
import {BorderedBlackSelect, FilterContainer} from "./Filter.styles.ts";
import {BorderedBlackButton} from "../../constants/buttons/Buttons.ts";
import {TextBlack18px} from "../../constants/fonts/Fonts.ts";

interface FilterProps {
    onFilter: (selectedCategory: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('point_of_interest');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleButtonClick = () => {
        onFilter(selectedCategory);
        console.log(selectedCategory)
    };

    return (
        <FilterContainer>
            <BorderedBlackSelect
                name={'category'}
                value={selectedCategory}
                onChange={handleSelectChange}
            >
                <option value="point_of_interest">Интересные места</option>
                <option value="museum">Музеи</option>
                <option value="park">Парки</option>
                <option value="zoo">Зоопарки</option>
                <option value="art_gallery">Галереи</option>
                <option value="tourist_attraction">Достопримечательности</option>
            </BorderedBlackSelect>
            <BorderedBlackButton onClick={handleButtonClick}>
                <TextBlack18px>Найти</TextBlack18px>
            </BorderedBlackButton>
        </FilterContainer>
    );
};