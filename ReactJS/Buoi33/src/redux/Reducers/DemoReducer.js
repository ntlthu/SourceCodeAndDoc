const stateDefault = {
  data: 1,
  title:"abc",
  hoTen:"Nguyen Van A"
}

export const DemoReducer = (state = stateDefault, action) => {
  return { ...state };
}