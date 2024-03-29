import { main } from '.';

describe('main method', () => {
  it('should call console.log with the correct message', () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, 'log');

    // Prevent actually logging to keep test output clean
    consoleSpy.mockImplementation(() => {});

    main();

    expect(consoleSpy).toHaveBeenCalledWith('it works!');

    // Clean up and remove the spy
    consoleSpy.mockRestore();
  });
});
