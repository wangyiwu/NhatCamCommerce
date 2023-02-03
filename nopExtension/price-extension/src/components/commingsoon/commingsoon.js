import styles from './commingsoon.module.css'
import React from 'react'

function CommingSoon({props}){
    return (
        <section className={[styles.section,styles["bg-gray out-of-bounds-pic"], styles["out-of-bounds-pic--worker-2"]].join(" ")}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={[styles["col-12"],styles["col-md-8"],styles[" text-center"], styles["text-md-left"]].join(" ")}>
                <div className={[styles["heading"],styles["heading--h2"],styles["text-center"],styles["text-md-left"]].join(" ")}>
                  <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Sắp triển khai</font></font></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default CommingSoon