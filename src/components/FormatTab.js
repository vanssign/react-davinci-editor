import { DropdownButton, Dropdown, Tooltip, OverlayTrigger, Popover, Modal } from 'react-bootstrap';
import React from 'react';
import { AspectRatios, SocialLinks, BootstrapColors, TextTags, aspectValueToRatio } from '../functions/Constants';

//Properties in Format tab
export default function FormatTab(props) {
    return (
        <div className="d-flex flex-wrap justify-content-start align-items-center">
            {/* tag type */}
            <div className="px-2 text-center">
                <small>Type</small>
                {((props.element.tag == "h1" || props.element.tag === "h2" || props.element.tag === "h3" || props.element.tag === "p" || props.element.tag === "h4" || props.element.tag === "h5" || props.element.tag === "h6" || props.element.tag === "code")) ?
                    (<DropdownButton title={props.element.tag} variant="light" size="sm">
                        {TextTags.map((t, i) =>
                            <Dropdown.Item key={props.index + "propertieschange" + i} onClick={() => props.updateElement(props.index, "tag", "", "", t.tag)} active={props.element.tag == t.tag ? (true) : (false)} >
                                <i className={`bi ${t.iconName}`}></i>
                                {t.shortName}
                            </Dropdown.Item>)}
                    </DropdownButton>) : (
                        <>
                            <br />
                            <button role="button" className="btn btn-sm btn-light-active">{props.element.tag}</button>
                        </>
                    )}
            </div>
            {/* reorder elements */}
            <div className="px-2 text-center">
                <small>Reorder</small>
                <br />
                <button type="button" className="btn btn-transparent styleBold text-primary-x py-0 px-1" onClick={() => props.changeElementIndex(props.index, -1)} disabled={props.index === 0}>
                    <i className="bi bi-chevron-compact-up"></i>
                </button>
                <button type="button" className="btn btn-transparent text-primary-x py-0 px-1" onClick={() => props.changeElementIndex(props.index, 1)} disabled={props.index == props.lastIndex}>
                    <i className="bi bi-chevron-compact-down"></i>
                </button>
            </div>
            {/* spacer elements properties */}
            {props.element.tag == "spacer" ? (
                <div className="px-2 text-center">
                    <small>Height</small>
                    <br />
                    <textarea rows="1" cols="4" value={props.element.height} className="btn btn-light" styles={{ resize: 'none !important' }} onChange={(e) => props.updateElement(props.index, "height", "", "", e.target.value)} placeholder="height" />
                </div>
            ) : (<></>)}
            {/* horizontal alignment */}
            {props.element.alignment ? (
                <div className="px-2 text-center">
                    <small>Align</small>
                    <DropdownButton title={<i className={`bi bi-text-${props.element.alignment}`}></i>} variant="light" size="sm">
                        <Dropdown.Item>
                            <button type="button" className={props.element.alignment === "left" ? ("btn btn-light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "alignment", "", "", "left")}  >
                                <i className="bi  bi-text-left lead"></i>
                            </button>

                            <button type="button" className={props.element.alignment === "center" ? ("btn btn-light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "alignment", "", "", "center")}>
                                <i className="bi  bi-text-center lead"></i>
                            </button>

                            <button type="button" className={props.element.alignment === "right" ? ("btn btn -light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "alignment", "", "", "right")}>
                                <i className="bi  bi-text-right lead"></i>
                            </button>

                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            ) : (<></>)}
            {/* vertical alignment */}
            {props.element.alignSelf ?
                (
                    <div className="px-2 text-center">
                        <small>Align</small>
                        <DropdownButton size="sm" title={props.element.alignSelf == " " ? (<i className="bi  bi-align-top"></i>) : (
                            props.element.alignSelf == "center" ? (<i className="bi  bi-align-center"></i>) : (<i className="bi  bi-align-bottom"></i>)
                        )} variant="light">
                            <Dropdown.Item>
                                <button type="button" className={props.element.alignSelf === " " ? ("btn btn -light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "alignSelf", "", "", " ")}  >
                                    <i className="bi  bi-align-top lead"></i>
                                </button>

                                <button type="button" className={props.element.alignSelf === "center" ? ("btn btn-light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "alignSelf", "", "", "center")}>
                                    <i className="bi  bi-align-center lead"></i>
                                </button>

                                <button type="button" className={props.element.alignSelf === "end" ? ("btn btn -light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "alignSelf", "", "", "end")}>
                                    <i className="bi  bi-align-bottom lead"></i>
                                </button>

                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                ) : (<></>)}
            {/* bold italic underline strikethrough */}
            {props.element.typography ? (
                <div className="px-2 text-center">
                    <small>Typography</small>
                    <br />
                    {Object.entries(props.element.typography).map((t, i) => {
                        return (
                            <button key={props.index + t[0]} type="button" className={t[1] ? ("btn btn-light-active py-0 px-1") : ("btn btn-light py-0 px-1")} onClick={() => props.updateElement(props.index, "typography", t[0], "", "")}>
                                <i className={`bi  bi-type-${t[0]}`}></i>
                            </button>
                        )
                    })}
                </div>
            ) : (<></>)}

            {props.element.btnColor ? (
                <div className="px-2 text-center">
                    <small>Color</small>
                    <DropdownButton title="Aa" variant={props.element.btnColor} size="sm">
                        {BootstrapColors.map((color, i) =>
                            <Dropdown.Item key={props.index + "propertieschange" + i + "color"} active={props.element.btnColor == color.name ? (true) : (false)} onClick={() => props.updateElement(props.index, "btnColor", "", "", color.name)}>
                                <button type="button" className={props.element.btnOutline ? (`btn btn-outline-${color.name}`) : (`btn btn-${color.name}`)}
                                >
                                    {color.name}
                                </button>
                            </Dropdown.Item>)}
                        <Dropdown.Item active={props.element.btnColor == "link" ? (true) : (false)} onClick={() => props.updateElement(props.index, "btnColor", "", "", "link")}>
                            <button type="button" className="btn btn-link">
                                link
                            </button>
                        </Dropdown.Item>
                        <Dropdown.Item active={props.element.btnColor == "transparent" ? (true) : (false)} onClick={() => props.updateElement(props.index, "btnColor", "", "", "transparent")}>
                            <button type="button" className="btn ">
                                transparent
                            </button>
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            ) : (<></>)}

            {props.element.textColor ? (
                <div className="px-2 text-center">
                    <small>Font Color</small>
                    <DropdownButton title={<i className="bi bi-fonts"></i>} variant={props.element.textColor} size="sm">
                        <Dropdown.Item>
                            {BootstrapColors.map((color, i) =>
                                <button key={props.index + "propertieschange" + i + "color"} style={{ borderRadius: '100%', paddingTop: '12px' }} type="button" className={props.element.textColor == color.name ? (`borderActive btn btn-${color.name} `) : (`border btn btn-${color.name} `)}
                                    onClick={() => props.updateElement(props.index, "textColor", "", "", color.name)}>
                                </button>
                            )}
                            <button style={{ borderRadius: '100%', paddingTop: '12px' }} type="button" className={props.element.textColor == "white" ? (`borderActive btn `) : (`border btn `)}
                                onClick={() => props.updateElement(props.index, "textColor", "", "", "white")}>
                            </button>
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            ) : (<></>)}

            {props.element.bgColor ? (
                <div className="px-2 text-center">
                    <small>Background Color</small>
                    <DropdownButton title={<i className="bi bi-back"></i>} variant={props.element.bgColor} size="sm" >
                        <Dropdown.Item>
                            {BootstrapColors.map((color, i) =>
                                <button key={props.index + "propertieschange" + i + "color"} style={{ borderRadius: '100%', paddingTop: '12px' }} type="button" className={props.element.bgColor == color.name ? (`borderActive btn btn-${color.name} `) : (`border btn btn-${color.name} `)}
                                    onClick={() => props.updateElement(props.index, "bgColor", "", "", color.name)}>
                                </button>
                            )}
                            <button style={{ borderRadius: '100%', paddingTop: '12px' }} type="button" className={props.element.bgColor == "white" ? (`borderActive btn `) : (`border btn `)}
                                onClick={() => props.updateElement(props.index, "bgColor", "", "", "white")}>
                            </button>
                            <button style={{ borderRadius: '100%', paddingTop: '12px' }} type="button" className={props.element.bgColor == "transparent" ? (`borderActive btn bg-checkered `) : (`border btn bg-checkered`)}
                                onClick={() => props.updateElement(props.index, "bgColor", "", "", "transparent")}>
                            </button>
                            {/* Custom Color */}

                            {/* <button style={{ borderRadius: '100%', paddingTop: '12px' }} type="button" className={props.element.bgColor == "custom" ? (`borderActive btn bg-rainbow `) : (`border btn bg-rainbow`)}
                            >
                            </button> */}
                        </Dropdown.Item>
                    </DropdownButton>
                </div>) : (<></>)}


            {props.element.whiteSpace ? (<div className="px-2 text-center">
                <small>On Enter Key</small>
                <div className="form-check py-0 ">
                    <DropdownButton title={props.element.whiteSpace} variant="light" size="sm">
                        <Dropdown.Item onClick={() => props.updateElement(props.index, "whiteSpace", "", "", "prewrap")} active={props.element.whiteSpace == "prewrap"}>
                            Line
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => props.updateElement(props.index, "whiteSpace", "", "", "normal")} active={props.element.whiteSpace == "normal"}>
                            Paragraph
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            ) : (<></>)}
            {props.element.size ? (
                <div className="px-2 text-center">
                    <small>Size</small>
                    <DropdownButton title={props.element.size} variant="light" size="sm">
                        <Dropdown.Item onClick={() => props.updateElement(props.index, "size", "", "", "sm")}>
                            Small
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => props.updateElement(props.index, "size", "", "", "rg")}>
                            Regular
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => props.updateElement(props.index, "size", "", "", "lg")}>
                            Large
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            ) : (<></>)}

            {props.element.tag === "button" ?
                (<>
                    <div className="px-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultChecked={props.element.btnOutline} id="btnOutlineCheck" onChange
                                ={() => props.updateElement(props.index, "btnOutline", "", "", !props.element.btnOutline)} />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Outline</label>
                        </div>
                    </div>
                    <div className="px-2 text-center">
                        <small><i className="bi bi-link-45deg"></i>{" "}Link</small>
                        <br />
                        <textarea rows="1" cols="5" value={props.element.href} className="btn btn-light btn-sm" styles={{ resize: 'none !important' }} onChange={(e) => props.updateElement(props.index, "href", "", "", e.target.value)} placeholder="Link" />
                    </div>
                    <div className="px-2 text-center">
                        <small>Icon{" "}</small>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 150, hide: 1500 }}
                            overlay={<Tooltip id="button-icon-tooltip" >
                                Visit <a href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap Icons</a> and add the name of the icon ex:alarm
                            </Tooltip>}
                        >
                            <i className="bi bi-info-circle-fill"></i>
                        </OverlayTrigger>
                        <br />
                        <textarea rows="1" cols="3" value={props.element.iconName} className="btn btn-light btn-sm" styles={{ resize: 'none !important' }} onChange={(e) => props.updateElement(props.index, "iconName", "", "", e.target.value)} placeholder="icon" />
                    </div>
                    <div className="px-2 text-center">
                        <small>Icon Position</small>
                        <DropdownButton size="sm" title={<i className={`bi bi-align-${props.element.iconPosition}`}></i>} variant="light">
                            <Dropdown.Item>
                                <button type="button" className={props.element.iconPosition === "start" ? ("btn btn -light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "iconPosition", "", "", "start")}  >
                                    <i className="bi  bi-align-start lead"></i>
                                </button>

                                <button type="button" className={props.element.iconPosition === "end" ? ("btn btn-light btn-light-active px-2 py-0") : ("btn btn-light px-2 py-0")} onClick={() => props.updateElement(props.index, "iconPosition", "", "", "end")}>
                                    <i className="bi  bi-align-end lead"></i>
                                </button>
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </>

                ) : (<></>)}

            {props.element.tag === "socialbtns" ?
                (<div className="px-2 text-center">
                    <small>Add Links</small>
                    <br />
                    <OverlayTrigger
                        trigger="click" placement="right"
                        rootClose={true}
                        overlay={
                            <Popover id="popover-basic">
                                <Popover.Title as="h3">Social Links</Popover.Title>
                                <Popover.Content>
                                    <>
                                        {SocialLinks.map((s, i) =>
                                            <div key={props.index + "propertieschange" + i}>
                                                <i className={`bi bi-${s.name} lead mr-2`}></i>
                                                <textarea rows="1" cols="10" value={props.element[s.name]} className="btn btn-light my-1 btn-sm" styles={{ resize: 'none !important' }} onChange={(e) => props.updateElement(props.index, s.name, "", "", e.target.value)} placeholder={s.name} />
                                            </div>)}
                                    </>
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <button type="button" className="btn btn-light btn-sm">Links <i className="bi bi-chevron-right"></i></button></OverlayTrigger>
                </div>
                ) : (<></>)}

            {props.element.tag === "embed" ? (
                <>
                    <div className="px-2 text-center">
                        <small>Aspect Ratio</small>
                        <DropdownButton title={
                            aspectValueToRatio(props.element.aspectRatio)
                        } variant="light" size="sm" >
                            {AspectRatios.map((asp, i) =>
                                <Dropdown.Item key={i + "aspect"} active={props.element.aspectRatio == asp.value ? (true) : (false)} onClick={() => props.updateElement(props.index, "aspectRatio", "", "",
                                    asp.value)}>
                                    {`${asp.ratio}`}
                                    {/* <i className={`bi bi-${col.iconName}`}></i> */}
                                </Dropdown.Item>)}
                        </DropdownButton>
                    </div>
                </>
            ) : (<></>)
            }

            {
                props.element.tag === "img" ?
                    (
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultChecked={props.element.responsive} id="imgResponsiveCheck" onChange
                                ={() => props.updateElement(props.index, "responsive", "", "", !props.element.responsive)} />
                            <label className="form-check-label" htmlFor="imgResponsiveCheck">
                                Responsive</label>
                        </div>
                    ) : (<></>)
            }

            {
                props.element.tag == "carousel" ?
                    (
                        <>
                            <div className="px-2 text-center">
                                <small>Animation</small>
                                <DropdownButton title={props.element.animation} variant="light" size="sm">
                                    <Dropdown.Item onClick={() => props.updateElement(props.index, "animation", "", "", "fade")} >
                                        fade
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.updateElement(props.index, "animation", "", "", "slide")} >
                                        slide
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="px-2 text-center">
                                <small>Interval(ms)</small><br />
                                <textarea rows="1" cols="4" value={props.element.interval} className="btn btn-light btn-sm" styles={{ resize: 'none !important' }} onChange={(e) => props.updateElement(props.index, "interval", "", "", e.target.value)} placeholder="Interval" />
                            </div>
                            <div className="px-2 text-left">
                                <small>Settings</small>
                                <div className="form-check py-0 ">
                                    <input className="form-check-input" type="checkbox" defaultChecked={props.element.controls} id="controlsCheck" onChange
                                        ={() => props.updateElement(props.index, "controls", "", "", !props.element.controls)} />
                                    <label className="form-check-label" htmlFor="controlsCheck">
                                        Controls</label>
                                </div>
                                <div className="form-check py-0">
                                    <input className="form-check-input" type="checkbox" defaultChecked={props.element.indicators} id="indicatorsCheck" onChange
                                        ={() => props.updateElement(props.index, "indicators", "", "", !props.element.indicators)} />
                                    <label className="form-check-label" htmlFor="indicatorsCheck">
                                        Indicators</label>
                                </div>
                            </div>
                        </>
                    ) : (<></>)
            }
        </div >
    )
}