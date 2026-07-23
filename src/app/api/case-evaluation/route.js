export async function POST(request) {
  try {
    const evaluationData = await request.json();
    console.log("Received Free Case Evaluation Submission (Next.js Route):", evaluationData);

    const confirmationCode = "LAW-" + Math.floor(100000 + Math.random() * 900000);

    return Response.json({
      success: true,
      confirmationCode,
      message: "Your case evaluation request has been submitted to our senior partners. An attorney will contact you within 15 minutes."
    });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
