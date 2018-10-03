import React, { Component } from 'react';
import scss from './NavDot.scss';
import classnames from 'classnames';




export default class NavDot extends Component {
  render() {
    return (
      <div id="navdotContainer" className={scss['nav-container']}>
        <div className={scss.Navigation}>
          <div className={classnames(scss['dot-item'], scss.item1)}>
            <div
						id="navdot1"
              className={classnames(
								scss['child-dot'],
								'navdot'
							)}
            >
              <div className={classnames(scss.inner,'inner')} data-index="0" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="1" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="2" />
              <div className={scss.outer} />
            </div>
          </div>
          <div className={classnames(scss['dot-item'], scss.item2)}>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="3" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="4" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="5" />
              <div className={scss.outer} />
            </div>
          </div>
          <div className={classnames(scss['dot-item'], scss.item3)}>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="6" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="7" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="8" />
              <div className={scss.outer} />
            </div>
          </div>
          <div className={classnames(scss['dot-item'], scss.item4)}>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="9" />
              <div className={scss.outer} />
            </div>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="10" />
              <div className={scss.outer} />
            </div>
            
          </div>
          <div className={classnames(scss['dot-item'], scss.item5)}>
            <div
              className={classnames(
								scss['child-dot'],
								'navdot'
              )}
            >
              <div className={classnames(scss.inner,'inner')} data-index="11" />
              <div className={scss.outer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
