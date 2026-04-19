import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { FaTwitter } from 'react-icons/fa'

function Testimonials() {
    const testimonials = [
        {
            img: 'https://i.pravatar.cc/100?img=12',
            name: 'Sam Lui',
            title: 'Lead Scraping — GlowSkin Co.',
            subtitle: 'Founder',
            text: 'TechTicks built a scraper + HubSpot enrichment pipeline that delivered hundreds of clean, verified B2B leads. Best service — highly recommended.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=32',
            name: 'Ahmed Raza',
            title: 'n8n Workflows — BuildPro Solutions',
            subtitle: 'Head of Operations',
            text: 'Great experience. Very responsive, consistently quick turnaround, and every workflow shipped solid. Easy to work with and very reliable.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=45',
            name: 'Bilal Hussain',
            title: 'Full-Stack Automation — FinTrack',
            subtitle: 'CTO',
            text: 'Excellent full-stack engineer with deep expertise in backend systems and automation. Built complex n8n workflows, integrated multiple APIs, and designed logic that actually held up in production.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=46',
            name: 'Emily Rodriguez',
            title: 'AI PDF Extraction — NovaEdge',
            subtitle: 'Operations Director',
            text: "The AI extraction pipeline replaced 20 minutes of paralegal work per contract with 30-second processing. Accuracy has been flawless.",
        },
        {
            img: 'https://i.pravatar.cc/100?img=47',
            name: 'Franc Tin',
            title: 'CRM Automation — HealthBridge Clinic',
            subtitle: 'Operations Director',
            text: 'Our Close.io ↔ Outlook sync runs silently and reliably every day. Their team anticipated edge cases we did not even think to mention.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=48',
            name: 'Ali Malik',
            title: 'Revolut + Notion Payouts — TrendWear',
            subtitle: 'Finance Lead',
            text: 'Month-end payouts used to take a full week. Now it is fully automated and the reconciliation is more accurate than when we did it by hand.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=49',
            name: 'Jason Lee',
            title: 'Zapier → n8n Migration — BrightTech',
            subtitle: 'Head of RevOps',
            text: 'We migrated from Zapier to self-hosted n8n with zero disruption — and cut our monthly automation bill by 60%. Every workflow came out cleaner.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=50',
            name: 'Michael Brown',
            title: 'Web Scraping Pipeline — StartSpark',
            subtitle: 'Growth Lead',
            text: 'The scraping pipeline runs daily and has filled our top-of-funnel more consistently than any outbound effort we ran previously. Set-and-forget.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=51',
            name: 'Daniel Carter',
            title: 'Custom Python APIs — LearnHub',
            subtitle: 'Engineering Lead',
            text: 'From architecture to deployment, the Python API layer they built is clean, documented, and still running exactly as designed a year later.',
        },
        {
            img: 'https://i.pravatar.cc/100?img=52',
            name: 'Zain Ali',
            title: 'Ongoing Automation Retainer — UrbanSpace',
            subtitle: 'COO',
            text: 'Even after launch, TechTicks keeps monitoring our workflows proactively. Response times are fast and every issue is resolved cleanly.',
        },
    ]

    const [emblaRef] = useEmblaCarousel(
        { loop: true, dragFree: true, align: 'start' },
        [AutoScroll({ speed: 1.5, stopOnInteraction: false, direction: 'forward' })]
    )

    const Card = ({ item }) => (
        <div style={{ width: '360px' }}>

            {/* BOX — only twitter icon + text inside */}
            <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px 24px',
                boxSizing: 'border-box',
				marginLeft: '12px',
            }}>
                {/* Twitter Icon */}
                <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: '#fff',
                    fontSize: '20px',
                }}>
                    <FaTwitter />
                </div>

                {/* Review Text */}
                <p style={{
                    color: '#ccc',
                    fontSize: '15px',
                    lineHeight: '1.8',
                    margin: 0,
                }}>
                    {item.text}
                </p>
            </div>

            {/* TRIANGLE — sits outside the box */}
            <div style={{
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '14px solid rgba(255,255,255,0.06)',
                marginLeft: '32px',
            }} />

            {/* USER INFO — fully outside the card box */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '16px',
                paddingLeft: '4px',
            }}>
                <img
                    src={item.img}
                    alt={item.name}
                    style={{
                        width: '58px',
                        height: '58px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
                <div>
                    <h6 style={{
                        margin: 0,
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#fff',
                    }}>
                        {item.name}
                    </h6>
                    <span style={{
                        fontSize: '13px',
                        color: '#777',
                    }}>
                        {item.subtitle}
                    </span>
                </div>
            </div>

        </div>
    )

    return (
        <section style={{
            background: '#000',
            padding: '100px 0',
            overflow: 'hidden',
            color: '#fff',
        }}>
            {/* Heading */}
            <div style={{
                textAlign: 'center',
                marginBottom: '60px',
                padding: '0 20px',
            }}>
                <h2 style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    marginBottom: '16px',
                }}>
                    Our Testimonials
                </h2>
                <p style={{
                    color: '#888',
                    fontSize: '15px',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}>
                    Don't just take our word for it; hear what our satisfied clients
                    have to say about their experience with TechTicks.
                </p>
            </div>

            {/* Single Row Carousel */}
            <div
                ref={emblaRef}
                style={{
                    overflow: 'hidden',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                }}
            >
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <div key={i} style={{ flex: '0 0 360px', minWidth: 0 }}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Testimonials