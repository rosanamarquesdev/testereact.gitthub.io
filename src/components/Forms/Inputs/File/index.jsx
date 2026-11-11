import React from "react";
import BiSmile from "../../../../../public/BiSmile";
import { theme } from "../../../../theme/theme";
import { Text } from "../../../Texts/Text";
import * as S from "./style";

export const FileInput = React.memo(
  ({
    variant = "primary",
    text,
    smileSize = 52,
    onChange,
    image,
    error = false,
    value,
    id,
    handleRemove,
  }) => {
    const [imageURL, setImageURL] = React.useState("");

    React.useEffect(() => {
      if (image && image instanceof Blob) {
        setImageURL(URL.createObjectURL(image));

        return;
      }

      if (image) {
        setImageURL(image);
        return;
      }

      return () => {
        if (imageURL) {
          URL.revokeObjectURL(imageURL);
        }
      };
    }, [image]);

    return (
      <S.FileContainer
        // Comentado, isso adiciona um erro no console, pois tenta renderizar um booleano no DOM
        // Essa modificação parece não ter afetado no funcionamento padrão do componente
        // error={error}
        // $image={!image ? '' : URL.createObjectURL(image)}
        $image={imageURL}
        $variant={variant}
      >
        {!error ? (
          <S.CenterBlock $image={image}>
            <BiSmile size={smileSize} />
            <Text bold="600" color={theme.colors.lightGray}>
              {text}
            </Text>
          </S.CenterBlock>
        ) : (
          <>
            <BiSmile size={smileSize} />
            <Text bold="600" color={theme.colors.delete}>
              Erro
            </Text>
          </>
        )}
        <S._File
          value={value ?? ""}
          accept="image/*"
          id={id}
          onChange={onChange}
        />

        {/* <input
        id="file"
        value={value ?? ''}
        onChange={onChange}
        accept="image/*"
        type="file"
        style={{ display: 'none' }}
      /> */}

        <S.Overlay $image={image}>
          <Text
            style={{
              alignItems: "center",
              flexDirection: "column",
            }}
            bold="600"
            color={theme.colors.lightGray}
          >
            <S.ButtonFileChange type="button">
              <label htmlFor={id}>Trocar foto</label>
            </S.ButtonFileChange>
            <S.ButtonFile onClick={handleRemove} type="button">
              Remover
            </S.ButtonFile>
          </Text>
        </S.Overlay>
      </S.FileContainer>
    );
  }
);
