import {useState} from "react";
import {
    CustomOption,
    CustomSelect,
    CustomSelectIcon,
    FilterContainer
} from "./Filter.styles";
import { TextBlack18px } from "../../constants/fonts/Fonts";
import { useDispatch } from 'react-redux';
import { setFilter } from "../../store/reducers/filterSlice";
// @ts-ignore
import { RootState } from '../app/store';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {MarkersList} from "../../assets/icons/places";
import {BorderedInput, FlexRow} from "../../constants/blocks/Blocks";
import {IconicButton} from "../Header/Header.styles";
import searchIcon from "../../assets/icons/searchIcon.svg";

export const Filter = () => {
    const dispatch = useDispatch();
    const [buildingType, setBuildingType] = useState(useTypedSelector((state) => state.filter.buildingType));
    const [radius, setRadius] = useState(useTypedSelector((state) => state.filter.radius));
    const [name, setName] = useState(useTypedSelector((state) => state.filter.name));
    const optionsList = MarkersList;
    const handleFilterChange = (key: string) => {
        setBuildingType(key);
    };

    const handleButtonClick = () => {
        dispatch(setFilter({ buildingType, radius, name }));
    };

    return (
            <FilterContainer>
                <BorderedInput placeholder="Наименование" onChange={(e) => setName(e.target.value)}/>
                    <CustomSelect>
                        {
                            Object.entries(optionsList).map(([key, [icon, label]]) => (
                                <CustomOption
                                    onClick={() => handleFilterChange(key)}
                                    isSelected={buildingType === key}
                                >
                                    <CustomSelectIcon src={icon} alt={key}/>
                                    <option value={key}>
                                        {label}
                                    </option>
                                </CustomOption>
                            ))
                        }
                    </CustomSelect>
                <FlexRow style={{justifyContent: 'flex-start'}}>
                    <BorderedInput placeholder="Радиус" style={{width: '50%'}} onChange={(e) => setRadius(parseInt(e.target.value) * 1000)}/>
                    <TextBlack18px>км</TextBlack18px>
                </FlexRow>
                    <IconicButton color={'#5E7BC7'} onClick={handleButtonClick} style={{width: '100%'}}>
                        <img src={searchIcon}/>
                    </IconicButton>
            </FilterContainer>
    );
};
