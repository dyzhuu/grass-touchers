<script lang="ts">    
    import vision from "@google-cloud/vision";

    var valid = "false";

    const CREDENTIALS = JSON.parse(JSON.stringify({
  "type": "service_account",
  "project_id": "inlaid-citron-392211",
  "private_key_id": "cd2d36101f3f193ecf050a17a5f00ae193f50a53",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCt6CislusfM1qq\nrBgxg5VTGFS8+OJ0QEjTzJJHPLudNMaKYMd1VdXZU4nD0lUTWeoBBwhsAMSETGen\n7D7mx5yMaptET4bhzbsY5jeRTGzokr/PlMS9HGP7hxZBsA1P3niAMpA3AEfGMXcn\nw7dxHbKFlcaOYtpH0I3jgxK6w2suyLg5UVj9aA86dthT73Jny4zXskmoU5fKO1/z\nJaYE44gmFFz9h8CvAhBh6jakf4Md1RY9SAbjCE4BVEPnqmI5L38Ce1zkCh1w9fUW\nO8nDCK/uBUyMrrC8uLMU2uNnxJGSNJbpHpDPgu/ID+EtgMgiJo8bv11WJOyQB6sX\nt1yANWVzAgMBAAECggEACUtyKmmDpFIYDi0O14YwegBOL5HfWevPpt8uH2J4bTpF\nJu3fleI+nVs7fQPl6gnNtjx1KH9CrD+5YlO4t9FC0DcaNQEQrbzFO3eeesu8SNmt\ntuLnshXQ3msMvk9AW1WeWFtGJLmFRzJyZGWhcOzhdumJVplquxjfudpgKvJyF84b\nwGpvatc9k10KQlvKDrh8Tmmv2eyOHlxnv2o9xufMs1KMMaM02QfeUb4XDABvkrOs\nUVMarCM0YasU2oCyOGwoRgg/aCnZ9PzD97HgRQSZLOBj40oRkiPHbdYBS4t2jRjX\nQku9gnbg/TNGxKwIjpKPYk8UG04xHOX6ID5hfWoZQQKBgQDqeQG533r+FsTkA1vy\nrQvJAuSYiLvJRK77Y5FQ2cItYZ/TZEJ0TEWlfvOp+9NOLxYR90rkVX3DMf62gs6H\ndG4++wVHSOWXh0e+cV8kgK90eNbnsx2pnb4HEKu7S0nOPCxzZp5AOkz7H+rb5Elj\ny2ytVHmKijB8+grVrm7y5hCLQQKBgQC936B8t8bce0KM1RXvaIMRshJm4EuQDjWa\ndWxuEFe9Mn0Gxf2JgDCq8Df03meDO/SqGgZxBHYLVTO5XYSlioW7SXsSJR5JJkbk\nt6w0TODoCCoiuOqfBe8P/mDxa0Fpc72z+HQ4mH7f4/qE9XdXeuYxBXar3dfYTKOl\niTVyI8VHswKBgQDmzyFc2FoZP06n6Yqcs62TPQ7L/GVmdf8OJfBJN2LHC3+qNtqX\n4vD4PaUconFaWE2Qd+84H9QBzvger1sgygMwaifDCUZAyIFePfnbU/XjYISkZpR/\ngHEsQUPbxfwsUN2s58pGDV30InIt7WY1H22mni5aqzeZ/wWlXOWIo+KLQQKBgEPS\nx88FDoHffaw0yXsVSAxgIXaiFBvHF5qu6yZ9q/mnOUXcH26oXboRyMstTqhwGDtS\nxI5GW6w8qRdDsog3bQGzg8S9gY37oEM+4MJl28jGcdapWxWm1vhNk29pMppqf47z\n5v/4aQmss+YekJytB+Dm5LcLrXhUF/ifhHnbETNFAoGAAz9wooS6os7Fv9zJBMn+\nPzH0ZWInl39HcsXZpX3P4uo833xQH3sAk/HZ9ytHZjuf78VSgA1dxu5QUXUHqJGD\n9rjUBviZydSLdbqOyWJrR9S10rGUWQOHHr4Ocrtg/hINyrp06dQVUxuAIGnRcajG\n58YBBNVlnZUJ6SGNY0RR6As=\n-----END PRIVATE KEY-----\n",
  "client_email": "grass-touchers-686@inlaid-citron-392211.iam.gserviceaccount.com",
  "client_id": "106583152859278799815",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/grass-touchers-686%40inlaid-citron-392211.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}));

    const CONFIG = {
        Credentials: {
            private_key: CREDENTIALS.private_key,
            client_email: CREDENTIALS.client_email,
        }
    };

    const client = new vision.ImageAnnotatorClient(CONFIG);

    async function checkImage() {

        // Creates a client
        const client = new vision.ImageAnnotatorClient();

        // Performs label detection on the image file
        const [result] = await client.labelDetection('src/lib/on-the-need-to-touch-grass.jpg');
        const labels = result.labelAnnotations;
        var containHand = true;
        var containGrass = false;
        labels.forEach(label => {
            if (label.description == "Grass"){
                containGrass = true;
            };
        });
        return (containGrass && containHand);
    };
    console.log("hi");
    valid = String(checkImage());
</script>

<dev>
    valid
</dev>