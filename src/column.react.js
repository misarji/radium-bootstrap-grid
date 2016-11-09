import Radium from 'radium';
import React from 'react';
import { column, columnHidden, columnOffset, columnPull, columnPush, columnWidth } from './grid';

class Column extends React.Component {

  render() {
    const {
      children,
      lg,
      lgHidden,
      lgOffset,
      lgPull,
      lgPush,
      md,
      mdHidden,
      mdOffset,
      mdPull,
      mdPush,
      ms,
      msHidden,
      msOffset,
      msPull,
      msPush,
      sm,
      smHidden,
      smOffset,
      smPull,
      smPush,
      style,
      xs,
      xsHidden,
      xsOffset,
      xsPull,
      xsPush,
      ...props
    } = this.props;

    let styles = [
      column,
      xsHidden && columnHidden['xs'],
      xsOffset && columnOffset['xs'][xsOffset],
      xsPull && columnPull['xs'][xsPull],
      xsPush && columnPush['xs'][xsPush],
      xs && columnWidth['xs'][xs]
    ];

    if (!this.props.forceMobile) {
      styles = styles.concat([
        ms && columnWidth['ms'][ms],
        msHidden && columnHidden['ms'],
        msOffset && columnOffset['ms'][msOffset],
        msPull && columnPull['ms'][msPull],
        msPush && columnPush['ms'][msPush],
        md && columnWidth['md'][md],
        mdHidden && columnHidden['md'],
        mdOffset && columnOffset['md'][mdOffset],
        mdPull && columnPull['md'][mdPull],
        mdPush && columnPush['md'][mdPush],
        sm && columnWidth['sm'][sm],
        smHidden && columnHidden['sm'],
        smOffset && columnOffset['sm'][smOffset],
        smPull && columnPull['sm'][smPull],
        smPush && columnPush['sm'][smPush],
        lg && columnWidth['lg'][lg],
        lgHidden && columnHidden['lg'],
        lgOffset && columnOffset['lg'][lgOffset],
        lgPull && columnPull['lg'][lgPull],
        lgPush && columnPush['lg'][lgPush],
      ])
    }

    styles.push(style);

    return (
      <div
        style={styles}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Radium(Column)
