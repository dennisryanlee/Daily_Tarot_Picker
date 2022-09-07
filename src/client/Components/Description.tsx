import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";
import { useNavigate } from "react-router-dom";

const Description = (props: Types.DescriptionCompProps) => {
  const nav = useNavigate();
  const [descButtonPressed, setDescButtonPressed] = useState<boolean>(false);
  const [expandButtonOnePressed, setExpandButtonOnePressed] = useState<boolean>(false);
  const [expandButtonTwoPressed, setExpandButtonTwoPressed] = useState<boolean>(false);
  const [descToHide, setDescToHide] = useState<number>(0);
  const [descButtonHidden, setDescButtonHidden] = useState<boolean>(true);

  /**
   * This function fetches the descriptions and sets component state 'descButtonPressed' to true.
   */
  const showDescriptions = () => {
    console.log(`Showing descriptions`);
    setDescButtonPressed(true);
    console.log(descButtonPressed);
  };

  useEffect(() => {}, [descButtonPressed, descToHide, descButtonHidden]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        {!descButtonPressed && (
          <button className="btn btn-primary" onClick={() => showDescriptions()}>
            Show Descriptions
          </button>
        )}

        {descButtonPressed && (
          <div className="d-flex flex-row justify-content-center align-items-center">
            {descToHide != 1 && (
              <div className="card col-6 mx-2">
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Card Description 1</h5>
                  {/* use a substring for the description, expanding to the entire description when an 'expand' button is pressed*/}
                  <p className="card-text text-center">
                    "desc": "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with
                    smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the
                    sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist
                    is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a
                    conventional symbol of eternity, but here it indicates more especially the eternity of attainment in
                    the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is
                    pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it
                    shews the descent of grace, virtue and light, drawn from things above and derived to things below.
                    The suggestion throughout is therefore the possession and communication of the Powers and Gifts of
                    the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits,
                    signifying the elements of natural life, which lie like counters before the adept, and he adapts
                    them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into
                    garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man,
                    reflecting God, the will in the liberation of its union with that which is above. It is also the
                    unity of individual being on all planes, and in a very high sense it is thought, in the fixation
                    thereof. With further reference to what I have called the sign of life and its connexion with the
                    number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change
                    \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and
                    Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."
                  </p>

                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setExpandButtonOnePressed(!expandButtonOnePressed);
                    }}
                  >
                    {expandButtonOnePressed ? "Collapse" : "Expand"}
                  </button>

                  {descToHide != 2 && (
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        setDescToHide(1);
                        setDescButtonHidden(true);
                      }}
                    >
                      Hide
                    </button>
                  )}
                </div>
              </div>
            )}

            {descToHide != 2 && (
              <div className="card col-6 mx-2">
                <div className="card-body text-center">
                  <h5 className="card-title text-center">Card Description 2</h5>
                  <p className="card-text text-center">
                    The Fool is numbered 0 - the number of unlimited potential - and so does not have a specific place
                    in the sequence of the Tarot cards. The Fool can be placed either at the beginning of the Major
                    Arcana or at the end. The Major Arcana is often considered The Fool's journey through life and as
                    such, he is ever present and therefore needs no number. On The Fool Tarot card, a young man stands
                    on the edge of a cliff, without a care in the world, as he sets out on a new adventure. He is gazing
                    upwards toward the sky (and the Universe) and is seemingly unaware that he is about to skip off a
                    precipice into the unknown. Over his shoulder rests a modest knapsack containing everything he needs
                    - which isn't much (let's say he's a minimalist). The white rose in his left hand represents his
                    purity and innocence. And at his feet is a small white dog, representing loyalty and protection,
                    that encourages him to charge forward and learn the lessons he came to learn. The mountains behind
                    The Fool symbolize the challenges yet to come. They are forever present, but The Fool doesn't care
                    about them right now; he's more focused on starting his expedition.
                  </p>

                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      setExpandButtonTwoPressed(!expandButtonTwoPressed);
                    }}
                  >
                    {expandButtonTwoPressed ? "Collapse" : "Expand"}
                  </button>

                  {descToHide != 1 && (
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => {
                        setDescToHide(2);
                        setDescButtonHidden(true);
                      }}
                    >
                      Hide
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center my-3">
            What thoughts do you have about the card and how it relates to your life? What new insights do you have
            after reading the description?
          </h4>
          <textarea className="form-control" wrap="hard" id="journal3" name="journal3" />
        </div>
      </div>
    </div>
  );
};

export default Description;
