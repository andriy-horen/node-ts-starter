import { main } from '.';

describe('main method', () => {
  it('should call console.log with the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    consoleSpy.mockImplementation(() => {
      // prevent actually logging to keep test output clean
    });

    main();

    expect(consoleSpy).toHaveBeenCalledWith('it works!');

    // clean up and remove the spy
    consoleSpy.mockRestore();
  });
});
