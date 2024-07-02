let Env: 'development' | 'staging' | 'production' | {
    obj2:object
} = 'staging';

function setEnv( env: 'development' | 'staging' | 'production'):
    'development' | 'staging' | 'production' {
    return env;
}

//Types
type Env = 'development' | 'staging' | 'production';
let env2: Env = 'staging';

function setEnv2( myEnv: Env):
    Env {
    return myEnv;
}

//Enums

const enum Env3 {
    Development = 'development',
    Staging = 'staging',
    Production = 'production'
}
let env3: Env3 = Env3.Production;

function setEnv3(myEnv: Env3): Env3 {
    return myEnv;
}

setEnv2(Env3.Development);