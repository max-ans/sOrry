import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader/Loader';
import { ThumbsUp, MessageSquare, AlertOctagon } from 'react-feather';
import Tippy from '@tippyjs/react';

import Field from 'src/components/Field/Field';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import './apology.scss';

const Apology = ({
  fetchApologyInformations,
  isFetched,
  apologyInformation,
  displayComments,
  displayCommentsSection,
  commentary,
  writeInInput,
  submitCommentForm,
  formError,
  actualUser,
  likeCurrentApology,
  unlikeCurrentApology,
}) => {
  const { slug } = useParams();

  useEffect(() => {
    fetchApologyInformations(slug);
  }, []);

  return (
    <main className="apology">
      {!isFetched && <Loader />}
      {isFetched && (
        <>
          <section className="apology-view">
            <h3 className="apology-title">
              {apologyInformation.title}
            </h3>
            <p className="apology-content">
              {apologyInformation.content}
            </p>
            <div className="apology-informations">
              <p className="apology-date">
                {apologyInformation.author.nickname} le {apologyInformation.createdAt}
              </p>
              <div className="apology-fame">
                <Tippy
                  className="tooltip"
                  inertia
                  interactive
                  animation="scale"
                  placement="top"
                  duration={500}
                  zIndex={9999}
                  content={(
                    <h3 className="tooltip-title">
                      {!displayComments ? 'Afficher les commentaires' : 'Cacher les commentaires' }
                    </h3>
                  )}
                >
                  <button
                    type="button"
                    className="comment-button"
                    onClick={displayCommentsSection}
                  >
                    <MessageSquare
                      className="comment-icon"
                    />
                  </button>
                </Tippy>
                {/* if the apology is in array of liked Apology of current user */}
                {(apologyInformation.userWhoLiked.find((elt) => (
                  elt.nickname === actualUser.nickname
                ))) && (
                <Tippy
                  className="tooltip"
                  inertia
                  interactive
                  animation="scale"
                  placement="top"
                  duration={500}
                  zIndex={9999}
                  content={(
                    <h3 className="tooltip-title">
                      Je n'aime plus
                    </h3>
                  )}
                >
                  <button
                    type="button"
                    className="like-button"
                    onClick={unlikeCurrentApology}
                  >
                    <ThumbsUp
                      className="like-icon unliked"
                    />
                  </button>

                </Tippy>
                )}
                {/* else */}
                {!(apologyInformation.userWhoLiked.find((elt) => (
                  elt.nickname === actualUser.nickname
                ))) && (
                <Tippy
                  className="tooltip"
                  inertia
                  interactive
                  animation="scale"
                  placement="top"
                  duration={500}
                  zIndex={9999}
                  content={(
                    <h3 className="tooltip-title">
                      J'aime
                    </h3>
                  )}
                >
                  <button
                    type="button"
                    className="like-button"
                    onClick={likeCurrentApology}
                  >
                    <ThumbsUp
                      className="like-icon"
                    />
                  </button>

                </Tippy>
                )}
                {apologyInformation.likes}
              </div>
            </div>
            <div className="apology-categories">
              {apologyInformation.categories.map((categorie) => (
                <div key={categorie.title} className="categories-item">
                  {categorie.title}
                </div>
              ))}
            </div>
            {displayComments && (
              <>
                <hr />
                <div className="apology-commentary">
                  <h3 className="comments-title">
                    Commentaires :
                  </h3>
                  {apologyInformation.comments.map((comment) => (
                    <div key={comment.id} className="comment-list">
                      <div className="comment">
                        <div className="comment-item">
                          {comment.content}
                        </div>
                        <div className="comment-infos">
                          <span className="comment-span">
                            de :&nbsp;
                          </span>
                          {comment.author.nickname}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
          <section className="form-comment">
            <form
              action=""
              className="form"
              onSubmit={(evt) => {
                evt.preventDefault();
                submitCommentForm();
              }}
            >
              <fieldset className="form-fieldset">
                <legend className="form-legend">
                  Poster un commentaire
                </legend>
                {formError && (
                  <div className="form-error">
                    <AlertOctagon />
                    <p className="error-description">
                      Votre commentaire doit comporter au moins 2 caractères
                    </p>
                  </div>
                )}
                <Field
                  identifier="commentary"
                  label=""
                  placeholder="Votre commentaire"
                  value={commentary}
                  changeField={writeInInput}
                />
                {(commentary.length > 0) && (
                  <button
                    type="submit"
                    className="form-submit"
                  >
                    Poster
                  </button>
                )}
              </fieldset>
            </form>
          </section>
        </>
      )}
    </main>
  );
};

Apology.propTypes = {
  fetchApologyInformations: PropTypes.func.isRequired,
  isFetched: PropTypes.bool.isRequired,
  apologyInformation: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number,
    createdAt: PropTypes.string,
    categories: PropTypes.array,
    comments: PropTypes.array,
    author: PropTypes.shape({
      nickname: PropTypes.string,
    }),
    userWhoLiked: PropTypes.arrayOf(
      PropTypes.shape({
        nickname: PropTypes.string,
      }),
    ),
  }),
  displayComments: PropTypes.bool.isRequired,
  displayCommentsSection: PropTypes.func.isRequired,
  commentary: PropTypes.string.isRequired,
  writeInInput: PropTypes.func.isRequired,
  submitCommentForm: PropTypes.func.isRequired,
  formError: PropTypes.bool.isRequired,
  actualUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    apologiesLiked: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  likeCurrentApology: PropTypes.func.isRequired,
  unlikeCurrentApology: PropTypes.func.isRequired,
};

Apology.defaultProps = {
  apologyInformation: {},
};

export default Apology;
