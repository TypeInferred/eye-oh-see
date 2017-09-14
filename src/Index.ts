import RegistrationMetadata from './attributes/RegistrationMetadata';

export { default as Container } from './Container';
export { default as SingleInstance } from './attributes/SingleInstance';
export { default as InstancePerDependency } from './attributes/InstancePerDependency';
export { default as InstancePerScope } from './attributes/InstancePerScope';
export { default as Disposable } from './attributes/Disposable';
export { default as ParamOf } from './attributes/ParamOf';
export { default as ArrayOf } from './attributes/ArrayOf';
export { default as Factory } from './attributes/Factory';
export { default as ScopedFactory } from './attributes/ScopedFactory';
export { IUnitOfWork } from './patterns/IUnitOfWork';
export { default as UnitOfWork } from './attributes/UnitOfWork';
export { default as ScopedUnitOfWork } from './attributes/ScopedUnitOfWork';

export function hasRegistrationAnnotation(factory: any) {
  return RegistrationMetadata.hasMetadata(factory);
}
