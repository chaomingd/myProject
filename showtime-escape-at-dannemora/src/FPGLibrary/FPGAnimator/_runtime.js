import ArrivalListener from 'joshua-arrival-listener';

export default {
  init(component, triggerPoint) {
    const el = component.refs.root;

    new ArrivalListener({
      el,
      offsetTopEnterBottom: triggerPoint,
      onTopEnterBottom() {
        el.setAttribute('data-active', '');
      },
      onTopLeaveBottom() {
        el.removeAttribute('data-active');
      },
    });
  },
};
