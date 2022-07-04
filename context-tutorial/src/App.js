import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import ColorContext, { ColorProvider } from "./contexts/color";

// <ColorContext.Provider value={{ color: "red" }}>
/* Provider를 사용하여 context의 value를 변경할 수 있다. Provider를 사용할 때, value를 명시하지 않고 사용하면 value가 필요하다는 오류가 발생함. */

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
