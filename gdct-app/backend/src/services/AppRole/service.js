import Container from 'typedi';
import AppRoleRepository from '../../repositories/AppRole';
import AppSysRoleRepository from '../../repositories/AppSysRole';

// @Service()
export default class AppRoleService {
  constructor() {
    this.AppRoleRepository = Container.get(AppRoleRepository);
    this.AppSysRoleRepository = Container.get(AppSysRoleRepository);
  }

  async createAppRole(AppRole) {
    return this.AppRoleRepository.create(AppRole);
  }

  async deleteAppRole(id) {
    if (await this.isRefered(id)) {
      throw Error('existed appSysRole');
    }
    return this.AppRoleRepository.delete(id);
  }

  async updateAppRole(id, AppRole) {
    return this.AppRoleRepository.update(id, AppRole);
  }

  async findAppRole(AppRole) {
    return this.AppRoleRepository.find(AppRole);
  }

  async isRefered(id) {
    const appRole = await this.AppRoleRepository.findById(id);
    const appSysRole = await this.AppSysRoleRepository.find({ role: appRole.code });
    return appSysRole.length !== 0;
  }
}
