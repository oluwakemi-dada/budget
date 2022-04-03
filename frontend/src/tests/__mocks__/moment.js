const moment = jest.requireActual('moment');

const mock = (timestamp = 0) => {
  return moment(timestamp);
};

export default mock;
