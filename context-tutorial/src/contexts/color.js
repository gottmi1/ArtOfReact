import { createContext, useState } from "react";
// 컨텍스트를 사용할 땐 react안에 createContext를 불러온다.

// 1. ColorConetx의 기본값에 객체를 넣어준다. 객체에는 state라는 값과 actions라는 값이 있음.
const ColorContext = createContext({
  // const ColorContext = createContext({ color: "black" });
  // 여기서 설정한 기본값 black은 Provider를 사용하지 않았을 때만 적용되는 디폴트 값이다.
  state: { color: "black", subcolor: "red" },
  // 이 기본값에 쓰이는 프로퍼티들은 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다.
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  // 2. ColorProvide안에 value라는 프로퍼티에 상태는 state로, 업데이트 함수는 actions로 묶어서 전달
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// ColorContext.Consumer를 ColorConsumer라는 이름으로 할당
const { Consumer: ColorConsumer } = ColorContext;

// 프로바이더와 컨슈머만 따로 내보냄
export { ColorProvider, ColorConsumer };

export default ColorContext;
