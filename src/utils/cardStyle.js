export const cardStyleByTaskType = taskType => {
  switch (taskType) {
    case 'job':
      return { borderLeft: '5px solid green', background: '#aed581' };
    case 'activity':
      return { borderLeft: '5px solid purple', background: '#b39ddb' };
    default:
      return {};
  }
};

export const defaultCardStyle = {
  position: 'absolute',
  top: 0,
  width: 'calc(100% - 55px)',
  left: 20,
  paddingLeft: 10,
  paddingTop: 5
};
