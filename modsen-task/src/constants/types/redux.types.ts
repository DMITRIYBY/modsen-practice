export interface UserState {
    login: string;
    password: string;
}

export interface FilterState {
    buildingType: string;
    radius: string;
}

export interface PlacesState {
    places: Place[]
}