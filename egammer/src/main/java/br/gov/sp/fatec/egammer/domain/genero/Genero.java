package br.gov.sp.fatec.egammer.domain.genero;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.util.View;

@Entity
@Table(name = "GENERO") 
public class Genero {
	
	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "gen_codigo")
	@JsonView( View.Game.class)
	private Long codigo;
	
	@Column(name = "gen_descricao",  nullable = false)
	@JsonView( View.Game.class)
	private String descricao;
	
	
	public Genero() {}
	
	public Genero(Long codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getCodigo() {
		return codigo;
	}
}
