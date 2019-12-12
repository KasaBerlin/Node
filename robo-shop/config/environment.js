const {env}=process;

const config={
    env:env.NODE_ENV || "development"
};

const devConfig={
    db:"mongodb://localhost:27017/robo-shop",
    secrets: {
        session: "Monkey bananas are good for your tummy"
      }
};

const prodConfig={
    db:env.MONGO_URL
};

const currentConfig=config.env==="production"? proConfig:devConfig;

module.exports=Object.assign({},config,currentConfig) //merges everything into one object