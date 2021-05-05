import ReportingPeriodEntity from '../../entities/ReportingPeriod';
import BaseRepository from '../repository';
import ReportingPeriodModel from '../../models/ReportingPeriod';

export default class ReportPeriodRepository extends BaseRepository {
  async delete(id) {
    return ReportingPeriodModel.findByIdAndDelete(id).then(
      reportingPeriod => new ReportingPeriodEntity(reportingPeriod.toObject()),
    );
  }

  async create(reportingPeriod) {
    return ReportingPeriodModel.create(reportingPeriod).then(
      reportingPeriod => new ReportingPeriodEntity(reportingPeriod.toObject()),
    );
  }

  async update(id, reportingPeriod) {
    return ReportingPeriodModel.findByIdAndUpdate(id, reportingPeriod).then(
      reportingPeriod => new ReportingPeriodEntity(reportingPeriod.toObject()),
    );
  }

  async find(query) {
    const realQuery = {};

    for (const key in query) {
      if (query[key]) realQuery[key] = query[key];
    }

    return ReportingPeriodModel.find(realQuery).then(status =>
      status.map(reportingPeriod => new ReportingPeriodEntity(reportingPeriod.toObject())),
    );
  }
}
