import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {ArrowDown} from "phosphor-react";
import {Package} from "phosphor-react";
import {Truck} from "phosphor-react";
import {House} from "phosphor-react";


function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element-"
                    date="ORDER DATUM: 11 - 4 - 2023"
                    iconStyle={{ background: "#09f391", color: "#fff" }}
                    icon={<ArrowDown size={32} />}
                >
                    <h1 className="vertical-timeline-element-title"> Altun </h1>
                    <h3> Bestelling ontvangen op: 11 - 4 - 2023 </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date="Bestelling verwerkt: 11 - 4 - 2023"
                    iconStyle={{ background: "#e09696", color: "#fff" }}
                    icon={<Package size={32} />}
                >
                    <h1> Transport Bedrijf X </h1>
                    <h3> Pakket ontvangen op: 11 - 4 - 2023 </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date="Pakket Gesorteerd"
                    iconStyle={{ background: "#e7d889", color: "#fff" }}
                    icon={<Truck size={32} />}
                >
                    <h1> Transport Bedrijf X </h1>
                    <h3> Pakket gereed voor transport: 11 - 4 - 2023 </h3>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    date=" "
                    iconStyle={{ background: "#92b2dc", color: "#fff" }}
                    icon={<House size={32} />}
                >
                    <h1> Klant X </h1>
                    <h3> Pakket bezorgd op: 12 - 4 - 2023 </h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
