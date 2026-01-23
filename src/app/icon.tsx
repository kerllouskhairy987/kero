import { ImageResponse } from 'next/og'

export const size = {
    width: 32,
    height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
    const host = process.env.HOST;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    borderRadius: "50%",
                    overflow: "hidden"
                }}
            >
                <img
                    src={`${host}/profile.jpg`}
                    width={32}
                    height={32}
                />
            </div>
        ),
        size
    )
}
