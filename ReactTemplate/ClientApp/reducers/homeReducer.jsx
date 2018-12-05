const homeReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'HOME_ADD':
            return [...state, action.payload]
        default:
            return state;
    }
}
export default homeReducer;