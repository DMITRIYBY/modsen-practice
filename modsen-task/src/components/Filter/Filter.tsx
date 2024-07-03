import React, {useState} from "react";
import { BorderedBlackSelect, FilterContainer } from "./Filter.styles";
import { BorderedBlackButton } from "../../constants/buttons/Buttons";
import { TextBlack18px } from "../../constants/fonts/Fonts";
import { useDispatch } from 'react-redux';
import { setFilter } from "../../store/reducers/filterSlice";
// @ts-ignore
import { RootState } from '../app/store';
import {useTypedSelector} from "../../Hooks/useTypedSelector";

export const Filter = () => {
    const dispatch = useDispatch();
    const [buildingType, setBuildingType] = useState(useTypedSelector((state) => state.filter.buildingType));
    const [radius, setRadius] = useState(useTypedSelector((state) => state.filter.radius));

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
                {/*<option value="">Все</option>*/}
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
