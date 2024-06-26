import React, {useState} from "react";
import { BorderedBlackSelect, FilterContainer } from "./Filter.styles.ts";
import { BorderedBlackButton } from "../../constants/buttons/Buttons.ts";
import { TextBlack18px } from "../../constants/fonts/Fonts.ts";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../../store/reducers/filterSlice.ts";
// @ts-ignore
import { RootState } from '../app/store';

export const Filter = () => {
    const dispatch = useDispatch();
    const [buildingType, setBuildingType] = useState(useSelector((state : RootState) => state.filter.buildingType));
    const [radius, setRadius] = useState(useSelector((state : RootState) => state.filter.radius));

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBuildingType(event.target.value);
        setRadius('1000');
    };

    const handleButtonClick = () => {
        dispatch(setFilter({ buildingType, radius }));
    };

    return (
        <FilterContainer>
            <BorderedBlackSelect
                name={'category'}
                value={buildingType}
                onChange={handleSelectChange}
            >
                <option value="">Все</option>
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
