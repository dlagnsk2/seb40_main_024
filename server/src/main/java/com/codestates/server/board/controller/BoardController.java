package com.codestates.server.board.controller;

import com.codestates.server.board.assembler.BoardAssembler;
import com.codestates.server.board.dto.BoardDto;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.mapper.BoardMapper;
import com.codestates.server.board.service.BoardService;
import com.codestates.server.dto.MultiResponseDto;
import com.codestates.server.exception.CustomException;
import com.codestates.server.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/board")
@Validated
public class BoardController {

    private final BoardService boardService;

    private final BoardMapper mapper;

    private final BoardAssembler assembler;

    public BoardController(BoardService boardService, BoardMapper mapper, BoardAssembler assembler) {
        this.boardService = boardService;
        this.mapper = mapper;
        this.assembler = assembler;
    }

    @GetMapping("/{id}")
    public EntityModel<BoardDto.Response> getBoard(@PathVariable long id) {
        Board board = boardService.findOne(id);
        BoardDto.Response response = mapper.boardToBoardResponseDto(board);
        return assembler.toModel(response);
    }

    @GetMapping
    public ResponseEntity getBoardsPaged(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {

        Page<Board> pagedBoards = boardService.findAllByPage(page - 1, size);
        List<EntityModel<BoardDto.Response>> boards = boardStream(pagedBoards.getContent());

        return new ResponseEntity<>(
                new MultiResponseDto<>(boards, pagedBoards), HttpStatus.OK);
    }

    // Page 없는 전체 게시물 조회
    @GetMapping("/all")
    public CollectionModel<EntityModel<BoardDto.Response>> getBoards() {

        List<Board> boards = boardService.findAll();
        List<EntityModel<BoardDto.Response>> response = boardStream(boards);

        return CollectionModel.of(response,
                linkTo(methodOn(BoardService.class).findAll()).withSelfRel());
    }

    @PostMapping
    public ResponseEntity<?> postBoard(@Valid @RequestBody BoardDto.Post requestBody) {

        EntityModel<BoardDto.Response> entityModel = assembler.toModel(boardService.createOne(requestBody));
        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchBoard(@PathVariable long id, @Valid @RequestBody BoardDto.Patch requestBody) {

        requestBody.setBoardId(id);
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(boardService.updateOne(requestBody));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @PatchMapping("/{id}/{like}")
    public ResponseEntity<?> likeBoard(@PathVariable("id") @Positive long id,
                                       @PathVariable("like") String like) {

        Board board = boardService.findVerifiedBoard(id);

        char operator = like.equals("like") ? '1' : like.equals("dislike") ? '0' : 'x';
        if (operator == 'x') throw new CustomException(ExceptionCode.BOARD_URL_NOT_FOUND);

        boardService.changeLike(board, operator);
        EntityModel<BoardDto.Response> entityModel = assembler.toModel(mapper.boardToBoardResponseDto(board));

        return ResponseEntity
                .created(entityModel.getRequiredLink(IanaLinkRelations.SELF).toUri())
                .body(entityModel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable long id) {
        boardService.deleteOne(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/tag/{tag}")
    public ResponseEntity getBoardsByTag(@Positive @RequestParam int page, @Positive @RequestParam int size,
                                         @PathVariable("tag") String tag) {

        char operator = tag.equals("post") ? 'p' : tag.equals("asset") ? 'a' : 'x';
        if (operator == 'x') throw new CustomException(ExceptionCode.BOARD_TAG_NOT_FOUND);

        Page<Board> pagedBoards = boardService.findAllByTag(page - 1, size, operator);
        List<EntityModel<BoardDto.Response>> boards = boardStream(pagedBoards.getContent());

        return new ResponseEntity<>(
                new MultiResponseDto<>(boards, pagedBoards), HttpStatus.OK);
    }

    public List<EntityModel<BoardDto.Response>> boardStream(List<Board> listedBoards) {
        return listedBoards.stream()
                .map(mapper::boardToBoardResponseDto)
                .map(assembler::toModel)
                .collect(Collectors.toList());
    }

}
