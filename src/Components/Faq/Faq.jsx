import React from "react";
import "./Faq.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Faq() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lx-12">
            <div class="card">
              <div class="card-body">
                <div class="row justify-content-center mt-4">
                  <div class="col-xl-5 col-lg-8">
                    <div class="text-center">
                      <h3>Frequently Asked Questions?</h3>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual
                      </p>
                      <div>
                        <button type="button" class="btn btn-primary me-2">
                          Email Us
                        </button>
                        <button type="button" class="btn btn-success">
                          Send us a tweet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row justify-content-center mt-5">
                  <div class="col-9">
                    <ul
                      class="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-genarel-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-genarel"
                          type="button"
                          role="tab"
                          aria-controls="pills-genarel"
                          aria-selected="true"
                        >
                          <span class="font-size-16">General Questions</span>
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-privacy_policy-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-privacy_policy"
                          type="button"
                          role="tab"
                          aria-controls="pills-privacy_policy"
                          aria-selected="false"
                        >
                          <span class="font-size-16">Privacy Policy</span>
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-teachers-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-pricing_plan"
                          type="button"
                          role="tab"
                          aria-controls="pills-pricing_plan"
                          aria-selected="false"
                        >
                          <span class="font-size-16">Pricing &amp; Plans</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-9">
                    <div class="tab-content pt-3" id="pills-tabContent">
                      <div
                        class="tab-pane fade active show"
                        id="pills-genarel"
                        role="tabpanel"
                        aria-labelledby="pills-genarel-tab"
                      >
                        <div class="row g-4 mt-2">
                          <div class="col-lg-6">
                            <h5>
                              Can the summarizer tool handle complex or
                              technical language?
                            </h5>
                            <p class="text-muted">
                              Yes, it can. The engine has been trained on a big
                              dataset, so technical or complex data is no a big
                              problem for the text summarizer.
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>
                              How fast can the summarizer tool generate a
                              summary?
                            </h5>
                            <p class="text-muted">
                              The text summarization engine can condense long
                              text within seconds.
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>
                              Does the paraphrasing tool improve the readability
                              and tone of the content?
                            </h5>
                            <p class="text-muted">
                              Yes it can, One of the two methods of paraphrasing
                              is called "Fluency". This will improve the
                              language and fix grammatical errors in the text
                              you are paraphrasing.
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>What does a risk of plagiarism mean?</h5>
                            <p class="text-muted">
                              VerbVista plagiarism checker estimates the risk of
                              plagiarism by calculating the percentage of text
                              in your document that is similar to other sources.{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="pills-privacy_policy"
                        role="tabpanel"
                        aria-labelledby="pills-privacy_policy-tab"
                      >
                        <div class="row g-4 mt-2">
                          <div class="col-lg-6">
                            <h5>Where can I get some ?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>Where does it come from ?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>Why do we use it ?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>What is Genius privacy policy</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-pricing_plan"
                        role="tabpanel"
                      >
                        <div class="row g-4 mt-4">
                          <div class="col-lg-6">
                            <h5>Where does it come from ?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>Why do we use it ?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>What is Lorem Ipsum ?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                          <div class="col-lg-6">
                            <h5>What is Lorem Ipsum?</h5>
                            <p class="lg-base">
                              If several languages coalesce, the grammar of the
                              resulting language is more simple and regular than
                              that of the individual languages. The new common
                              language will be more simple and regular than the
                              existing
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
