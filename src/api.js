const stubApi = {
  window: {
    startAutoResizer: () => {
      console.log("api:startAutoResizer");
    }
  },
  field: {
    getValue: () => {
      return "A value";
    },
    setValue: value => {
      console.log("api:setValue", value);
      return Promise.resolve();
    }
  }
};

const initMockApi = () => {
  return Promise.resolve(stubApi);
};

const initRealApi = () => {
  const contentfulExtension =
    window.contentfulExtension || window.contentfulWidget;
  return new Promise(resolve => {
    contentfulExtension.init(api => {
      resolve(api);
    });
  });
};

export const initApi =
  process.env.NODE_ENV === "development" ? initMockApi : initRealApi;
