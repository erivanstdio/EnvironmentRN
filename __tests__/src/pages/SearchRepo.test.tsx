import 'react-native-gesture-handler/jestSetup';
import { fireEvent, render } from "@testing-library/react-native";
import { SearchRepo } from "../../../src/pages/SearchRepo";

describe('SearchRepo', () => {

  // it('should render SearchRepo', () => {
    
  //   render(<SearchRepo />);
  // })

  it('should fire search repo event', () => {

    const { getByPlaceholderText, getAllByA11yHint, debug } = render(<SearchRepo />);
    
    const input = getAllByA11yHint('InputSearchRepo')
    const button = getAllByA11yHint('ButtonComponent')

    // fireEvent.changeText(input, 'HugoGuilherme')
    // console.log(button)
  })
 
});