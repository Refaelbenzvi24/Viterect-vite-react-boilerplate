import { EnvFileProps, Vars } from './modules/vars'


Vars.setupVars(import.meta.env as unknown as EnvFileProps)
