const ExportHtmlCode = (
  imagePath: string,
  dialogInputData: any,
  thumbWrapsCountPart1: number,
  thumbWrapsCountPart2: number,
  thumbWrapsCountPart3: number,
  thumbWrapsCountPart4: number
) => {
  //part1 code
  const renderThumbWraps = () => {
    let thumbWrapsHtml = "";
    for (let i = 0; i < thumbWrapsCountPart1; i++) {
      thumbWrapsHtml += `
            <tr>
              <td style="vertical-align:top;">
                  <img src=${
                    dialogInputData[`thumbWrap-${i + 1}-img-${i + 1}`]
                      ? dialogInputData[`thumbWrap-${i + 1}-img-${i + 1}`]
                      : "https://lh3.googleusercontent.com/pw/ADCreHeNkVAIaJnzVDkptD8HL3UTYvor4_wx-81o5JKEzV7bsWJtd84rG1XxLvDe6xFX1V27YD1hoVNQbhWWWAw1z_YJZ8-WjZKA9d6cjXpRnQO6sQ1aXzi7gYwpmPphDwaYLCMTMoFPUXi_inWEhjGfwfMI=w660-h275-s-no-gm?authuser=1"
                  }
                  width="660" height="275" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;"
                   />
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="margin:0;margin-top: 30px;margin-right: 60px;margin-left: 27px;margin-bottom: 6px;font-family: '맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 18px;font-weight: bold;">
                  ${
                    dialogInputData[`thumbWrap-${i + 1}-text-${i + 1}`]
                      ? dialogInputData[`thumbWrap-${i + 1}-text-${i + 1}`]
                      : "개인화 시대"
                  }
                  </div>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="margin:0;margin-right: 60px;margin-left: 27px;margin-top: 6px;font-family: 'Georgia','맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 13px;color:#444444;">
                  ${
                    dialogInputData[`thumbWrap-${i + 1}-subtext-${i + 1}`]
                      ? dialogInputData[`thumbWrap-${i + 1}-subtext-${i + 1}`]
                      : "UX Story"
                  }
                  </div>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="letter-spacing:-0.5px;font-weight:500;margin-left: 27px;margin-top: 15px;margin-right: 60px;margin-bottom: 20px;color:#000;font-size:15px;line-height: 26px;">
                  ${
                    dialogInputData[`thumbWrap-${i + 1}-detailtext-${i + 1}`]
                      ? dialogInputData[
                          `thumbWrap-${i + 1}-detailtext-${i + 1}`
                        ]
                      : "추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 '개인화'입니다. 개인화는 설정 등의 맞춤화와는 달리 데이터에 기반하여 사용자에게 알맞은 정보나 기능을 전달하는 것입니다. 이번글에서는 최근 고도화된 개인화의 AI활용에 대해서 이야기해 봅니다.추천과 더불어 최근의 UX/UI에서 주목받고 있는 게 ‘개인화’입니다."
                  }      
                  </div>
              </td>
           </tr>
           <tr>
            <!--link button-->
            <td style="vertical-align:top;">
                <table width="660" height="34" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    <tr>
                        <td style="vertical-align:top;">
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHcpBcC_XEAGF9W9oB2van5vtAcc7DbqJ2FBm607JW0ogEFSiPubErWeP2KwqBAaW18JYaHCTuX7KF799xWma2YwJPYEFFZkqXY6i1P7RBgErinXzU9NqBxjI8fKpcOimYsjwBI-jNBEBiWH_T0j9SjA=w26-h26-s-no-gm?authuser=1" width="15" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                        </td>
                        <td style="vertical-align:top;">
                            <a href=${
                              dialogInputData[
                                `thumbWrap-${i + 1}-link-${i + 1}`
                              ]
                                ? dialogInputData[
                                    `thumbWrap-${i + 1}-link-${i + 1}`
                                  ]
                                : "https://blog.rightbrain.co.kr/?p=14969"
                            }
                             target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdXV0BXbMelcz8VPxR7hroFC-hwctmbRi3oS52lgwaMps4dBK24FKmJbTutRTMIMYsG0ghj_vxil1kaoqUSzeeN8yJaa4IpnM1df-OVK-iqY0Te-qRhMKbYhuzjLGkkwzAcpb0JFISLyLc_9LMAfffn=w82-h34-s-no-gm?authuser=1" width="82" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                        </td>
                        <td style="vertical-align:top;">
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHfTzFbto5XrG8NTekRjlqi_eHXJzdtXIU0i_so5Yyp7vc6Y1hNiEN2QgGb9cEm9OopqU4EWFuVyUxr2_m7jzduG6lq9lY_4V6mW_Lx7b3dPICyyjNsfhRPR_u-awFKHTlDgNNqbkxh8_gvrp1ZPCDhK=w551-h36-s-no-gm?authuser=1" width="551" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                        </td>
                    </tr>
                </table>
            </td>
            <!--//link button-->
        </tr>
        <tr>
            <td style="vertical-align:top;">
            <img src="https://lh3.googleusercontent.com/pw/ADCreHcoWEawOSTThj_8XEw3riAWm1j1s4HfDTKlcQm8AlcXa65gkku7J44Pn7hir-QO7BIxO7yXMzrJfA_ydilrj39901FwoqhnYilKFGrz6CmqVe5vMUyRQjnit4mK5DP3ddoA85xL8ycUdmVn9_tWFI2b=w660-h70-s-no-gm?authuser=1" width="660" height="70" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
            </td>
        </tr>
           `;
    }
    return thumbWrapsHtml;
  };
  //part2 code
  const renderThumbWraps02 = () => {
    let thumbWrapsHtml = "";
    for (let i = 0; i < thumbWrapsCountPart2; i++) {
      thumbWrapsHtml += `
            <tr>
              <td style="vertical-align:top;">
                  <img src=${
                    dialogInputData[`thumbWrap02-${i + 1}-img-${i + 1}`]
                      ? dialogInputData[`thumbWrap02-${i + 1}-img-${i + 1}`]
                      : "https://lh3.googleusercontent.com/pw/ADCreHex2IScRlsVI9Ch3gPWPZJMyF2Wv796SlS0XKAEafxx33EgmJvtbk7XifWUVjxEv1hqFnOokXV4-7-u6jr6A2QTPOM2kVttf4VtIJRH1V_B2YFEB-ve75M7YjE5pYH8floIGl_UKnSpymhdxPq_rDjp=w660-h275-s-no-gm?authuser=1"
                  }
                  width="660" height="275" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;"
                   />
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="margin:0;margin-top: 30px;margin-right: 60px;margin-left: 27px;margin-bottom: 6px;font-family: '맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 18px;font-weight: bold;">
                  ${
                    dialogInputData[`thumbWrap02-${i + 1}-text-${i + 1}`]
                      ? dialogInputData[`thumbWrap02-${i + 1}-text-${i + 1}`]
                      : "슈퍼앱 : 하나의 앱에서 모든 서비스를"
                  }
                  </div>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="margin:0;margin-right: 60px;margin-left: 27px;margin-top: 6px;font-family: 'Georgia','맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 13px;color:#444444;">${
                    dialogInputData[`thumbWrap02-${i + 1}-subtext-${i + 1}`]
                      ? dialogInputData[`thumbWrap02-${i + 1}-subtext-${i + 1}`]
                      : "App Review"
                  }</div>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="letter-spacing:-0.5px;font-weight:500;margin-left: 27px;margin-top: 15px;margin-right: 60px;margin-bottom: 20px;color:#000;font-size:15px;line-height: 26px;">
                  ${
                    dialogInputData[`thumbWrap02-${i + 1}-detailtext-${i + 1}`]
                      ? dialogInputData[
                          `thumbWrap02-${i + 1}-detailtext-${i + 1}`
                        ]
                      : "슈퍼앱은 혁신적인 개념으로, 다양한 서비스를 하나의 플랫폼 또는 앱 내에서 통합하여 제공합니다. 이번 글에서는 슈퍼앱의 개념과 특징, 국내외 주요 슈퍼앱들의 사례를 알아보겠습니다."
                  }      
                  </div>
              </td>
           </tr>
           <tr>
            <!--link button-->
            <td style="vertical-align:top;">
                <table width="660" height="34" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    <tr>
                        <td style="vertical-align:top;">
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHcpBcC_XEAGF9W9oB2van5vtAcc7DbqJ2FBm607JW0ogEFSiPubErWeP2KwqBAaW18JYaHCTuX7KF799xWma2YwJPYEFFZkqXY6i1P7RBgErinXzU9NqBxjI8fKpcOimYsjwBI-jNBEBiWH_T0j9SjA=w26-h26-s-no-gm?authuser=1" width="15" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                        </td>
                        <td style="vertical-align:top;">
                            <a href=${
                              dialogInputData[
                                `thumbWrap02-${i + 1}-link-${i + 1}`
                              ]
                                ? dialogInputData[
                                    `thumbWrap02-${i + 1}-link-${i + 1}`
                                  ]
                                : "https://blog.rightbrain.co.kr/?p=14969"
                            }
                             target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdXV0BXbMelcz8VPxR7hroFC-hwctmbRi3oS52lgwaMps4dBK24FKmJbTutRTMIMYsG0ghj_vxil1kaoqUSzeeN8yJaa4IpnM1df-OVK-iqY0Te-qRhMKbYhuzjLGkkwzAcpb0JFISLyLc_9LMAfffn=w82-h34-s-no-gm?authuser=1" width="82" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                        </td>
                        <td style="vertical-align:top;">
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHfTzFbto5XrG8NTekRjlqi_eHXJzdtXIU0i_so5Yyp7vc6Y1hNiEN2QgGb9cEm9OopqU4EWFuVyUxr2_m7jzduG6lq9lY_4V6mW_Lx7b3dPICyyjNsfhRPR_u-awFKHTlDgNNqbkxh8_gvrp1ZPCDhK=w551-h36-s-no-gm?authuser=1" width="551" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                        </td>
                    </tr>
                </table>
            </td>
            <!--//link button-->
        </tr>
        <tr>
            <td style="vertical-align:top;">
            <img src="https://lh3.googleusercontent.com/pw/ADCreHcoWEawOSTThj_8XEw3riAWm1j1s4HfDTKlcQm8AlcXa65gkku7J44Pn7hir-QO7BIxO7yXMzrJfA_ydilrj39901FwoqhnYilKFGrz6CmqVe5vMUyRQjnit4mK5DP3ddoA85xL8ycUdmVn9_tWFI2b=w660-h70-s-no-gm?authuser=1" width="660" height="70" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
            </td>
        </tr>
           `;
    }
    return thumbWrapsHtml;
  };

  //part3 code
  const renderThumbWraps03 = () => {
    let thumbWrapsHtml = "";
    thumbWrapsHtml += `
    <tr>
        <td style="vertical-align:top;">
            <img src=${
              dialogInputData["thumbWrap03-1-img-1"]
                ? dialogInputData["thumbWrap03-1-img-1"]
                : "https://lh3.googleusercontent.com/pw/ADCreHf53NO9r7dYxvF8yG7wf24zi3IS3s9VOlE5VJ5eRl3myxzD7YBpiNQXp9wlgscWCKOKX3wpY6hHwKmmTeIZOhdw6OYphzhXt-Qomc1azoHaLTmTelLZ5ihWqjwsOp2xt-m37xrjio_K47n8cRCY9-eX=w660-h275-s-no-gm?authuser=1"
            }
             width="660" height="307" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
        </td>
    </tr>
    <tr>
        <td style="vertical-align:top;">
            <div style="margin:0;margin-right: 60px;margin-left: 27px;margin-top: 30px;margin-bottom: 6px;font-family:  '맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 18px;font-weight: bold;">
            ${
              dialogInputData["thumbWrap03-1-text-1"]
                ? dialogInputData["thumbWrap03-1-text-1"]
                : "라이트브레인 UX 아카데미 오픈 프로젝트 공개"
            }
            </div>
        </td>
    </tr>
    <tr>
        <td style="vertical-align:top;">
            <div style="margin:0;margin-right: 60px;margin-left: 27px;margin-top: 6px;font-family:  'Georgia','맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 13px;color:#444444;">
            ${
              dialogInputData["thumbWrap03-1-subtext-1"]
                ? dialogInputData["thumbWrap03-1-subtext-1"]
                : "Open Project"
            }
            </div>
        </td>
    </tr>
    <tr>
        <td style="vertical-align:top;">
            <div style="letter-spacing:-0.5px;font-weight:500;margin-left: 27px;margin-top: 15px;margin-right: 60px;margin-bottom: 20px;color:#000;font-size:15px;line-height: 26px;">
            ${
              dialogInputData["thumbWrap03-1-detailtext-1"]
                ? dialogInputData["thumbWrap03-1-detailtext-1"]
                : "라이트브레인 UX 아카데미 교육 과정의 결과물입니다. 지난 UX 아카데미 22~23기 교육 기간 동안 정규과정의 수업뿐만 아니라 별도의 조별 모임을 통해 과제와 프로젝트를 진행하며 만들어 낸 신선한 아이디어를 Rightbrain lab을 통해 공개합니다."
            }
            </div>
        </td>
    </tr>
`;

    const listTitle = [
      "29cm – UX/UI 개선",
      "토스 모바일앱 – UX/UI 개선",
      "이마트몰 – UX/UI 개선",
      "배달의민족 – UX/UI 개선"
    ];
    const listLink = [
      "https://blog.rightbrain.co.kr/?p=15044",
      "https://blog.rightbrain.co.kr/?p=15021",
      "https://blog.rightbrain.co.kr/?p=14899",
      "https://blog.rightbrain.co.kr/?p=14886"
    ];
    for (let i = 0; i < thumbWrapsCountPart3; i++) {
      thumbWrapsHtml += `
    <tr>
        <td style="vertical-align:top;">
            <table width="660" align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                    <td style="vertical-align:top;">
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHfizVvAXxXDO6l763GmZ6qhnTkDL5mi_RmDbwxY3RWEf5MK8gshbcb7NfZqhnLP6mfYPDnL6bYK8thtXxhKkwSFvoIp6NUjmG7p_4k7k-btSvlOiIqaRhUaD90hdvS1F3h3V5RezHgcJVkhlgqHNl4t=w660-h39-s-no-gm?authuser=1" width="660" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align:top;">
                        <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            <tr>
                                <td style="vertical-align:top;" width="552">
                                    <div style="margin:0;letter-spacing:-2px;margin-left:27px;font-family:  '맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 15px;font-weight: bold;line-height: 35px">
                                    ${
                                      dialogInputData[
                                        `listTextWrap-${i + 1}-listText-${
                                          i + 1
                                        }`
                                      ]
                                        ? dialogInputData[
                                            `listTextWrap-${i + 1}-listText-${
                                              i + 1
                                            }`
                                          ]
                                        : listTitle[i]
                                    }
                                    </div>
                                </td>
                                <td style="vertical-align:middle;">
                                    <a href=
                                    ${
                                      dialogInputData[
                                        `listTextWrap-${i + 1}-listLink-${
                                          i + 1
                                        }`
                                      ]
                                        ? dialogInputData[
                                            `listTextWrap-${i + 1}-listLink-${
                                              i + 1
                                            }`
                                          ]
                                        : listLink[i]
                                    }
                                     target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdXV0BXbMelcz8VPxR7hroFC-hwctmbRi3oS52lgwaMps4dBK24FKmJbTutRTMIMYsG0ghj_vxil1kaoqUSzeeN8yJaa4IpnM1df-OVK-iqY0Te-qRhMKbYhuzjLGkkwzAcpb0JFISLyLc_9LMAfffn=w82-h34-s-no-gm?authuser=1" width="82" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                </td>
                                <td style="vertical-align:top;">
                                    <img src="https://lh3.googleusercontent.com/pw/ADCreHcpBcC_XEAGF9W9oB2van5vtAcc7DbqJ2FBm607JW0ogEFSiPubErWeP2KwqBAaW18JYaHCTuX7KF799xWma2YwJPYEFFZkqXY6i1P7RBgErinXzU9NqBxjI8fKpcOimYsjwBI-jNBEBiWH_T0j9SjA=w26-h26-s-no-gm?authuser=1" width="26" height="35" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
   
`;
    }

    return thumbWrapsHtml;
  };

  //part4 code
  const renderThumbWraps04 = () => {
    let thumbWrapsHtml = "";
    for (let i = 0; i < thumbWrapsCountPart4; i++) {
      thumbWrapsHtml += `
            <tr>
              <td style="vertical-align:top;">
                  <img src=${
                    dialogInputData[`thumbWrap04-${i + 1}-img-${i + 1}`]
                      ? dialogInputData[`thumbWrap04-${i + 1}-img-${i + 1}`]
                      : "https://lh3.googleusercontent.com/pw/ADCreHdBWxF0Fl1vO8OYTbfJkUm5KSlukHqSGnuQEKmKtaP9mSv7opT_6zT69nkIxJHBfhzD0k2a8LrEsHmo8uzQWu8H6w1a-km9kXr74_EmiY4s3kO6ApBBmarANvFoUVcuuOvWuvUMfmtmdg5z335Uq3Ry=w660-h275-s-no-gm?authuser=1"
                  }
                  width="660" height="275" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;"
                   />
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="margin:0;margin-top: 30px;margin-right: 60px;margin-left: 27px;margin-bottom: 6px;font-family: '맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 18px;font-weight: bold;">
                  ${
                    dialogInputData[`thumbWrap04-${i + 1}-text-${i + 1}`]
                      ? dialogInputData[`thumbWrap04-${i + 1}-text-${i + 1}`]
                      : "라이트브레인, 2023 ICT AWARD KOREA 금상"
                  }
                  </div>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="margin:0;margin-right: 60px;margin-left: 27px;margin-top: 6px;font-family: 'Georgia','맑은고딕', 'Apple SD Gothic Neo','Noto Sans KR', sans-serif;font-size: 13px;color:#444444;">
                  ${
                    dialogInputData[`thumbWrap04-${i + 1}-subtext-${i + 1}`]
                      ? dialogInputData[`thumbWrap04-${i + 1}-subtext-${i + 1}`]
                      : "ICT AWARD KOREA 2023"
                  }</div>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;">
                  <div style="letter-spacing:-0.5px;font-weight:500;margin-left: 27px;margin-top: 15px;margin-right: 60px;margin-bottom: 20px;color:#000;font-size:15px;line-height: 26px;">
                  ${
                    dialogInputData[`thumbWrap04-${i + 1}-detailtext-${i + 1}`]
                      ? dialogInputData[
                          `thumbWrap04-${i + 1}-detailtext-${i + 1}`
                        ]
                      : "라이트브레인이 사단법인 한국정보과학진흥협회가 주최한 ICT AWARD KOREA 2023 디지털 인사이트부문에서 KT Genie TV로 금상(한국정보과학진흥협회장상)을 수상하였습니다."
                  }      
                  </div>
              </td>
           </tr>
           <tr>
            <!--link button-->
            <td style="vertical-align:top;">
                <table width="660" height="34" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    <tr>
                        <td style="vertical-align:top;">
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHcpBcC_XEAGF9W9oB2van5vtAcc7DbqJ2FBm607JW0ogEFSiPubErWeP2KwqBAaW18JYaHCTuX7KF799xWma2YwJPYEFFZkqXY6i1P7RBgErinXzU9NqBxjI8fKpcOimYsjwBI-jNBEBiWH_T0j9SjA=w26-h26-s-no-gm?authuser=1" width="15" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                        </td>
                        <td style="vertical-align:top;">
                            <a href=${
                              dialogInputData[
                                `thumbWrap04-${i + 1}-link-${i + 1}`
                              ]
                                ? dialogInputData[
                                    `thumbWrap04-${i + 1}-link-${i + 1}`
                                  ]
                                : "https://blog.rightbrain.co.kr/?p=14969"
                            }
                             target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdXV0BXbMelcz8VPxR7hroFC-hwctmbRi3oS52lgwaMps4dBK24FKmJbTutRTMIMYsG0ghj_vxil1kaoqUSzeeN8yJaa4IpnM1df-OVK-iqY0Te-qRhMKbYhuzjLGkkwzAcpb0JFISLyLc_9LMAfffn=w82-h34-s-no-gm?authuser=1" width="82" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                        </td>
                        <td style="vertical-align:top;">
                            <img src="https://lh3.googleusercontent.com/pw/ADCreHfTzFbto5XrG8NTekRjlqi_eHXJzdtXIU0i_so5Yyp7vc6Y1hNiEN2QgGb9cEm9OopqU4EWFuVyUxr2_m7jzduG6lq9lY_4V6mW_Lx7b3dPICyyjNsfhRPR_u-awFKHTlDgNNqbkxh8_gvrp1ZPCDhK=w551-h36-s-no-gm?authuser=1" width="551" height="34" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                        </td>
                    </tr>
                </table>
            </td>
            <!--//link button-->
        </tr>
        <tr>
            <td style="vertical-align:top;">
                <img src="https://lh3.googleusercontent.com/pw/ADCreHcoWEawOSTThj_8XEw3riAWm1j1s4HfDTKlcQm8AlcXa65gkku7J44Pn7hir-QO7BIxO7yXMzrJfA_ydilrj39901FwoqhnYilKFGrz6CmqVe5vMUyRQjnit4mK5DP3ddoA85xL8ycUdmVn9_tWFI2b=w660-h70-s-no-gm?authuser=1" width="660" height="70" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
            </td>
        </tr>
           `;
    }
    return thumbWrapsHtml;
  };
  //html all code
  const getExportHtml = () => {
    return `
      <!DOCTYPE  html  PUBLIC  "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html  xmlns="http://www.w3.org/1999/xhtml">
          <head>
              <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
              <meta name="viewport" content="width=660" />
              <title>뉴스레터</title>
          </head>
          <body style="margin:0;padding:0;">
              <table width="680"  align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                  <tr>
                      <td  align="center">
                          <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                          <!--header-->
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHfYu107dROni41fDN71XqinJG4OSr2BQlZWCDpNIMC8eiqT6IA5f8295lP-A5TyoY0dgxbrGRDnLBIW6qbKLdYD9Ax3PD-2x3A7bLSxOGqoYiFSU_iz1C6-fWJ_JZy4LxXMvHa6ucHH1-9puFJTums=w659-h28-s-no-gm?authuser=2" width="660" height="28" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <!-- head1// -->
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcSSJH1pOVr29DPeW2JrBFWEkVIMjZ0YqRJmjVYD7g8K-ky60PmfSm1PaPHb916mgjhq5s5-3dFQbhgTxlhKp5RfcYzwhA4ryFCVmOEqLGnpfZj9RC3Pr68D1GCbTdKPvZz2znMbRYE1OVvQYyon2M=w27-h25-s-no-gm?authuser=2" width="27" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="https://www.rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHfBTspu1HOWs-VnKmuYfnmDMq58faVzxMt9IF0ixeRypjq0VV7ugDoTrIdGPN4P8vTqCwBK0GQ4t35mNESOlTguF0hfkYz0UZSDB5fY_IL6485cb5VAlRk31q1zE5KGVzDwSdeDbh2gYULWF-PzjqM=w95-h25-s-no-gm?authuser=2" width="95" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcSSJH1pOVr29DPeW2JrBFWEkVIMjZ0YqRJmjVYD7g8K-ky60PmfSm1PaPHb916mgjhq5s5-3dFQbhgTxlhKp5RfcYzwhA4ryFCVmOEqLGnpfZj9RC3Pr68D1GCbTdKPvZz2znMbRYE1OVvQYyon2M=w27-h25-s-no-gm?authuser=2" width="35" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="mailto:support@rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHfD1-r9-8B2wD5Aei_bI0Q-ycX_ypCdGrMSdcREyduRtP4YSbxgUIYTz8HfRyTrGYx4l5AfEgArPfXGKgqPNO2625i1j9kpYpfdjNrNtZLK6772AtK3E_GFttmylCdBcTwMQdKOvWFoI-sIsI4E8GQ=w76-h25-s-no-gm?authuser=2" width="76" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHc8Skjx2NrbikVldsc57KTeOS7tbO4zQw9zbrB5Ka80HLciKgIIBJr49m1NkcSiiPcip-Q0vkKuu58ivLMYwXJ0NEWg6HiyEgoD0vcM8ZISdOT6Ldj5G8Tr9LUZmX0tLNi2rTTzu-Of3FjuWeyO1YY=w307-h25-s-no-gm?authuser=2" width="307" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="https://www.rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHfdqjWoBaBBUCd9NPlX5wwXEg35vrp8bZU2BWpkWBUtU8TIdlWGj5q4TbL6VbsuTmq0v2mOvJEvupMwkfARH4o9njAQ0IV61kXeCHEzxaA6HwEqmA07ajuLU8lfolmP2eVrRGor3OCky5MDexWRZ9o=w95-h25-s-no-gm?authuser=2" width="96" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcSSJH1pOVr29DPeW2JrBFWEkVIMjZ0YqRJmjVYD7g8K-ky60PmfSm1PaPHb916mgjhq5s5-3dFQbhgTxlhKp5RfcYzwhA4ryFCVmOEqLGnpfZj9RC3Pr68D1GCbTdKPvZz2znMbRYE1OVvQYyon2M=w27-h25-s-no-gm?authuser=2" width="24" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      
                                      </table>
                                      <!-- //head1 -->
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHfYu107dROni41fDN71XqinJG4OSr2BQlZWCDpNIMC8eiqT6IA5f8295lP-A5TyoY0dgxbrGRDnLBIW6qbKLdYD9Ax3PD-2x3A7bLSxOGqoYiFSU_iz1C6-fWJ_JZy4LxXMvHa6ucHH1-9puFJTums=w659-h28-s-no-gm?authuser=2" width="660" height="66" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <!-- head2// -->
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;" >
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHc4wcwcjN7Wsfg80vo0fkXRmbwcrXd1Berg2ovmm4EDF7ggps8hn6CrFFRSzELWlg1VhrWTIty6YxvsPvdzxWaJSbrYw4PwuNA7uVItvExhoPisFvax6mkjF_2Rz7fGzieb3FWhF8Mv7tmO2KiMa30=w600-h222-s-no-gm?authuser=2" width="600" height="222" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="${
                                                    imagePath
                                                      ? imagePath
                                                      : `https://lh3.googleusercontent.com/pw/ADCreHdfPOOgp4QxmWlun607qHn0XKMSHjcLmcbRLmCVgUV5R7XTcx60jK8fzhWXcm3_9Q-NzRsRwyshBOOJ8KWu6Cjh4dca3kMgy8L55PihjhmkQbNc--8NOU1CKQ-As-spkeK09-iKaRCKhdHNTppKeuwC=w59-h222-s-no-gm?authuser=1`
                                                  }" width="60" height="222" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <!--//header-->
                          </table>
                      </td>
                  </tr>
                  <tr>
                    <td style="vertical-align:top;">
                        <!-- ux design insigt title// -->
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHeP3mndOi5G4cff2B0nvhSAC9Gzjq1sA8R24PkwMMiMXa-ZWKxzq1GcgboWRNLxlNltzUA23kyN8FE0106bS7vZPjBBS07e76a69WKrb0OLqtSZwXytWgqkGpgVnUNWLPV94FzmaxXhQw_fQQ-KWysc=w660-h75-s-no-gm?authuser=1" width="660" height="75" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                    </td>
                 </tr>
                  ${renderThumbWraps()}
                  <tr>
                    <td style="vertical-align:top;">
                        <!--special review title// -->
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHeiaYOn5hRewAHiehlsooUi7e5lNqKq8YlswO-jZhpIZKX_Pg8u4D10PNimm1RIdhfVRLE3YkVJGfO0efu80JkbLErR-myWirFJNnJdCW-Ab4RsDi9s4jvCrYekr3wevoBosROxK5OBivZCkconMgIM=w660-h124-s-no-gm?authuser=1" width="660" height="125" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                    </td>
                  </tr>
                  ${renderThumbWraps02()}
                  <tr>
                    <td style="vertical-align:top;">
                        <!--ux academy title// -->
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHdoM4WTYPiTIeP08_93-VBF42COJ7zpVTjgaAS4Ilg6ZrbxrxJeGiuNydNuTxDrYW_aDrbMJtdHkiaUshTc6XdFnKlibCVpE8BETEjU2jZh3vp-H2HNdg2X3W_PjSb8z21imnr4rv4euW7zHJUU6hkT=w660-h125-s-no-gm?authuser=1" width="660" height="125" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                    </td>
                  </tr>
                  ${renderThumbWraps03()}
                  <tr>
                    <td style="vertical-align:top;">
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHfizVvAXxXDO6l763GmZ6qhnTkDL5mi_RmDbwxY3RWEf5MK8gshbcb7NfZqhnLP6mfYPDnL6bYK8thtXxhKkwSFvoIp6NUjmG7p_4k7k-btSvlOiIqaRhUaD90hdvS1F3h3V5RezHgcJVkhlgqHNl4t=w660-h39-s-no-gm?authuser=1" width="660" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="vertical-align:top;">
                        <img src="https://lh3.googleusercontent.com/pw/ADCreHcoWEawOSTThj_8XEw3riAWm1j1s4HfDTKlcQm8AlcXa65gkku7J44Pn7hir-QO7BIxO7yXMzrJfA_ydilrj39901FwoqhnYilKFGrz6CmqVe5vMUyRQjnit4mK5DP3ddoA85xL8ycUdmVn9_tWFI2b=w660-h70-s-no-gm?authuser=1" width="660" height="70" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                    </td>
                 </tr>
                  <td style="vertical-align:top;">
                    <!--rightbrain insight title// -->
                    <img src="https://lh3.googleusercontent.com/pw/ADCreHfX7CzOd1iI4ZOlc3cgDGUrLPWsifzd4PZyPNvbSJICD9t8EbZmz1JxvkK35M75E6SNdDECTBPanV_qOfiO8aINLqU-jXACYaJWYszvWhFphnsSpw1kL6EpjdUJCniLSuHjCpPjy2IlUVd6S5rvhdlV=w660-h106-s-no-gm?authuser=1" width="660" height="106" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                 </td>
                 ${renderThumbWraps04()}
                  <tr>
                      <td style="vertical-align:top;">
                          <!-- footer// -->
                          <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHeV8-hk-G4dd1vQTWcjn5wpXR582b4jiq61zZyIoTni5_o0oFCMixyzHRGSRxH1Ynu9y8CW7neo3Z7jOZdvOZqdjHKncjkrI1aUJwxn66Q7CgNq3S6xYKdYXEhQnjwYLjs98CZcCZ-6a_yJI9hZ_gE=w658-h71-s-no-gm?authuser=2" width="660" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="26" height="27" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="mailto:support@rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHcsqFWti0e9kvQ2jcXsejnwhR8sKhTXPka8QG70qE0liApmllBziR041CqVqQcybmm9WSyIDob2qldnDLygZ74JEW1PBS_RlX8V14aAbti4uwO5nZQxGCtPXe10F1pjqcOjTKYbHnA_D-H6UlnVBWk=w229-h27-s-no-gm?authuser=2" width="229" height="27" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="405" height="27" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="48" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="30" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="mailto:support@rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdnaYyM7iVKApgSLG1kCkEWeDXUFjIF3hn6fMbc-Sz9TGH61HgVRG-MKwUOcJp7qzd2c7q2CgxmpxX-s94iu9OBuWVxB3Z6yrkc-ISzIfOOBP-FoPQmH1-up_dnfZVcp6G6rQkff3Qc1qsDkVcoarA=w150-h71-s-no-gm?authuser=2" width="150" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeF-mmWK8lBy7qifWLzAYf6IPiQLVBl69LfBEfCeXEc2vEhbZ_7Jb68Tsgch08VoNaSuPsrFuSNDI0wgKvKFVTwyzhWL5fA-jjq8l_gRyVQHcfB52Mz4tV1PqZ-MzLnBCD8mlhI1dJgSZWyC-KXku8=w480-h71-s-no-gm?authuser=2" width="480" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="33" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="26" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top; " />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://blog.rightbrain.co.kr/" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHccF3CII-1vQT5ZjNntGNIzdq3vTEaKlwSrYXXitzK5t83uBAsdzu542WSKWxGrK4cUpQz0_CMvNp9KKHEQgWXjTIw-6hmA0RSXieGYHzfcioMOILEkf3Ojw0UeRtDXpBVlhajlZ3_kPrOA1n513WcM=w155-h39-s-no-gm?authuser=1" width="155" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="75" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://www.rightbrain.co.kr/" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHcc-ZEr8WJJ-TecAFMM6lmi8_RE4kLP_T-FlWFICfHB_KAFmYKmL8ti8ezqt_PHnxRf5Rok_Ku5nsfWY_-dC8izCnBt7NCGE8Jl7xxl1rOugAYiPoULSFslPmvNxWi2I2QQNDapPjVFBnDu9nOd_0Ht=w213-h39-s-no-gm?authuser=1" width="213" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="191" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="26" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://drive.google.com/uc?export=view&id=1lins3yx66-kqTOC3SjyziKscBbNTV5TD"  target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdPnEJy5fS0aW0y_4M2PHOj4LAuHRdJS-VYBggZ2x4i709JxB_2DJdz3Jm4bQX84xcq11CNJGcMQD0P9fbG9BGouqdR_ijaanjdS7aawopAp6Kn-39rkvjznjjOqjYZt_j1fPF2Cf2R4OtgndC3iD5h=w155-h39-s-no-gm?authuser=1" width="155" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="75" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://blog.rightbrain.co.kr/" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHeD49WhsFJQ9xRYpp7eHUw6oOGqHKM_MSw3TEVgM2D6I4APoSKSJxiXvMVe8p9qC50IVGTm0ofdfQm-VtJCIcCcD3eeE_qBHZ7eAz1xotS59vwAJaJpDOHXNDEeRBmjsXPv5ll37uirh1B6oNQtWTH4=w213-h39-s-no-gm?authuser=1" width="213" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="190" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" height="35" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcMusKMU7FOSWofaQIdF5gVipMGQ_Dr1jwd52dr5bFEkO7XnP5N0EFXBLV4O35t3PAQRtiAJ6uxsXP29N7xVEL89ishH6zA0LI-GBL64u3hcDydmkjRvywLj5pH5Ko9TTcc55drZmqmYp15Z7YpO2kk=w660-h57-s-no-gm?authuser=1" width="257" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://www.facebook.com/ux1korea"  target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHd5z1Vt71QdxppdQmIjg5DUnO-Hi17ymS0wPSR5sLrXS4KmBXjJEib-P0Cx7eeHyLbOaVpIuViwoPsztQqiIxJI9iKR690YU6e9iUb-d66htqjkoXHmy3tp7BMtZZ9nrRjfmYl5CKMgVRjHUAUEbYrt=w276-h39-s-no-gm?authuser=1" width="276" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="127" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="57" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </body>
        </html>
      `;
  };

  return <>{getExportHtml()}</>;
};
export default ExportHtmlCode;
