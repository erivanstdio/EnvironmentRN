import 'react-native-gesture-handler/jestSetup';
import { render } from "@testing-library/react-native";
import { SearchRepo } from "../../../src/pages/SearchRepo";

describe('SearchRepo', () => {

  it('should render SearchRepo', () => {
    
    render(<SearchRepo />);
  })
});