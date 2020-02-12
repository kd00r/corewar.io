import { IRepository } from '@/database/Repository'
import sinon from 'sinon'

const buildRepositoryMock = (): IRepository =>
    ({
        getAll: sinon.stub(),
        getById: sinon.stub(),
        getOneBy: sinon.stub(),
        getManyBy: sinon.stub(),
        upsert: sinon.stub(),
        delete: sinon.stub()
    } as IRepository)

export default buildRepositoryMock
