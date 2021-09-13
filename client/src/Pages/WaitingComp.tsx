import * as React from 'react';
import st from '../Assets/styles/waiting.module.css'

const WaitingComp: React.FC = () => {
    const [date, setDate] = React.useState<any>()
    const [isReady, setIsReady] = React.useState<boolean>(false)

    React.useEffect(() => {
        setInterval(() => {
            const currentDate: any = new Date()
            const targetDate: any = new Date('1 Oct 2021')
            const sec = (targetDate - currentDate) / 1000
            const daysToTarget = Math.floor(sec / 3600 / 24)
            const hours = Math.floor(sec / 3600) % 24
            const mins = Math.floor(sec / 60) % 60
            const newTargetDate = {
                days: daysToTarget,
                hours: hours,
                minutes: mins
            }
            setDate(newTargetDate)
            setIsReady(true)
            console.log(hours)
        }, 1000)

    }, [])

    return (
        <div className={st.wrapper}>
            <div className={st.header}>
                Starts in:
            </div>
            {
                isReady ? (
                    <div className={st.timer}>
                        <div className={st.date}>
                            <div className={st.substring}>
                                days
                            </div>
                            <div className={st.time}>
                                {date.days}
                            </div>
                        </div>
                        <div className={st.date}>
                            <div className={st.substring}>
                                hours
                            </div>
                            <div className={st.time}>
                                {date.hours}
                            </div>
                        </div>
                        <div className={st.date}>
                            <div className={st.substring}>
                                mins
                            </div>
                            <div className={st.time}>
                                {date.minutes}
                            </div>
                        </div>
                    </div>

                ) : null
            }
        </div>
    );
};

export default WaitingComp;
