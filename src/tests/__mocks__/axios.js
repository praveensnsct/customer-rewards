const mockAxios = jest.genMockFromModule('axios');

// this is the key to fix the axios.create() undefined err!
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;